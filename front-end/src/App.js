import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
import { Notification } from "./components/others/Notifications";
import OrphansTable from "./components/orphansMain/OrphansTable";
import Cover from "./components/others/Cover";
import coverImg from "./assets/cover.jpg";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  };

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      <Notification />
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                logout={logout}
              />
            </Nav.Item>
          </Nav>
          <main> <OrphansTable /> </main>
        </Container>
      ) : (
        <Cover name="Orphan Sponsorship" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;