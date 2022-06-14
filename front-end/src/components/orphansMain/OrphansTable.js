import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import Loader from "../others/Loader";
import { NotificationSuccess, NotificationError } from "../others/Notifications";
import {list_orphans, unregister_orphan, sponsor_by_id, add_orphan} from "../../utils/sponsorship";
import SponsoringForm from "./SponsoringForm";
import "./sortArrow.css";
import Big from 'big.js';
import { getAccountId } from "../../utils/near";
import AddOrphan from "./AddOrphan";

const CONTRACT_NAME = "orphan-sponsorship.help-needy.testnet";

//orphans table on the main page
const OrphansTable = () => {
    const [orphans, setOrphans] = useState([]);
    const [loading, setLoading] = useState(false);
    const id_array = [];
    //get the orphans' data from the collection
    const getOrphans = async () => {
      try {
        setLoading(true);
        setOrphans(await list_orphans());
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };
    //handle sponsoring form submit
    const handleSponsoring = async ({orphanId, daysToSponsor}) => {
      try {

        setLoading(true);
        if (isNaN(+orphanId) || +orphanId < 0 || !Number.isInteger(+orphanId)){
          throw new Error("Unsuccessful Transaction: Orphan Id should be zero or positive integer.");
        }
        else if (isNaN(+daysToSponsor) || +daysToSponsor <= 0 || !Number.isInteger(+daysToSponsor)){
          throw new Error("Unsuccessful Transaction: Days to Sponsor should be positive integer.");
        }
        
        await orphans.map(a => id_array.push(a.orphan_id));

        if (!id_array.includes(orphanId)){
          throw new Error("Unsuccessful Transaction: Entered Orphan Id does not exist. Look at the table and enter an available Id.");
        }
        await sponsor_by_id({id:orphanId, near_amount:Big(daysToSponsor).times(0.2).times(10**24).toFixed()});

        toast(<NotificationSuccess text={"Transaction was successful."} />);
        console.log("Transaction was successful.");
      } catch (error) {
        toast(<NotificationError text={error.toString()} />);
        console.log({ error });
      } finally {
        setOrphans(await list_orphans());
        setLoading(false);
      }
    };
    // handle add orphan button push
    const handleAddOrphan = async ({name,birthYear,gender,country}) => {
      try {
        let gendeR = gender.toLowerCase();
        setLoading(true);
        if (await getAccountId().then(data => data) !== CONTRACT_NAME){
          throw new Error("Only allowed accounts can add an orphan.");
        }
        else if (isNaN(+birthYear) || +birthYear < 2001 || +birthYear > 4000 || !Number.isInteger(+birthYear)){
          throw new Error("Unsuccessful Transaction: Birth Year entered is problematic.");
        }
        else if (gendeR!== "male" && gendeR!== "female"){
          throw new Error("Unsuccessful Transaction: Gender entered is problematic.");
        }
        await add_orphan({name:name,birthYeaR:birthYear,genderr:gendeR,countrY:country});
        setOrphans(await list_orphans());
        toast(<NotificationSuccess text={"Orphan was registered successfully."} />);
      } catch (error) {
        toast(<NotificationError text={error.toString()} />);
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };

    // handle delete button push
    const handleDelete = async (id) => {
      try {
        setLoading(true);
        if (await getAccountId().then(data => data) !== CONTRACT_NAME){
          throw new Error("Only allowed accounts can unregister an orphan.");
        }
        else if (id==="0"){
          throw new Error("The member with id 0 cannot be unregistered.");
        }
        await unregister_orphan({id});
        setOrphans(await list_orphans());
        toast(<NotificationSuccess text={"Orphan with id " + id + " was unregistered successfully."} />);
      } catch (error) {
        toast(<NotificationError text={error.toString()} />);
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        getOrphans();
      }, []);
    // table filling
    const columns = [{
        dataField: 'orphan_id',
        text: "Orphan ID",
        headerStyle: { width: '80px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
        sort: true,
        sortFunc: (a, b, order) => {
          if (order === 'asc') {
            return b - a;
          }
          return a - b; // desc
        }
      }, {
        dataField: 'full_name',
        text: 'Full Name',
        headerStyle: { width: '120px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
      }, {
        dataField: 'birth_year',
        text: 'Birth Year',
        headerStyle: { width: '100px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
        formatter: (cellContent, row) => {
          return ( 
            <>
            {(row.birth_year === 0) && <span>secret</span>}
            {(row.birth_year !== 0) && row.birth_year}
            </>
            
          );}
      }, {
        dataField: 'gender',
        text: 'Gender',
        headerStyle: { width: '100px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
        formatter: (cellContent, row) => {
          return ( 
            <>
            {(row.birth_year === 0) && <span>secret</span>}
            {(row.gender === false && row.birth_year !== 0) && "Male"}
            {(row.gender === true && row.birth_year !== 0) && "Female"}
            </>
            
          );}
      }, {
        dataField: 'sponsored_for',
        text: 'Sponsored Days So Far',
        headerStyle: { width: '100px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
        sort: true,
        sortFunc: (a, b, order) => {
          if (order === 'asc') {
            return b - a;
          }
          return a - b; // desc
        }
      }, 
      {
        dataField:"",
        text: "Unregister Orphan (only for Allowed Accounts)",
        headerStyle: { width: '100px', textAlign: 'center', verticalAlign: 'middle', overflowWrap:"break-word" },
        editable: false,
        formatter: (cellContent, row) => {
          return (
            <button
              className="btn btn-danger btn-xs"
              onClick={() => handleDelete(row.orphan_id)}
            >
              Unreg
            </button>
          );
        }
    }
      
    ];

    const defaultSorted = [{
        dataField: 'orphan_id',
        order: 'desc'
      }];


      return (
          <>
    {!loading ? (<>
    <div className="App">
      <SponsoringForm submit_form={handleSponsoring} />
      <br /><br />
      <Row  className="mb-2 justify-content-md-center mt-5">
      <Col className="col-md-auto">
        <h1 style={{textAlign:"center"}} className="justify-content-center">Table of Orphans To Be Sponsored</h1>
      </Col>
      </Row>
      <AddOrphan add={handleAddOrphan} />
      <div class="table-responsive-md">
      <BootstrapTable keyField="orphan_id" 
      classes="mt-3"
      data={orphans} 
      columns={columns} 
      defaultSorted={ defaultSorted }
      rowStyle={ { textAlign: "center", verticalAlign:"middle", fontWeight: "500", overflowWrap:"break-word"} }
      striped hover condensed />
      </div>
    </div>
    </>):(
        <Loader />
      )}
      </>
      );
};

export default OrphansTable;