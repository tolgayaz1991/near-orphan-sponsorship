import { context, storage, PersistentUnorderedMap, u128, ContractPromiseBatch, logging} from "near-sdk-as";

import { Orphan, orphans} from './model';

/**********  change methods ***********/

// member with id 0 for secret support

export function add_secret(): void {

    assert(context.contractName==context.sender,"Transaction was unsuccessful: Only allowed accounts can register an orphan.");

    let secret_id: u64 = 0;
    let secret_name: string = "secret (our organization choose the orphan(s) to support)";
    let secret_birth_year: u16 = 0;
    let secret_gender: bool = 0;
    let secret_country: string = "secret";
    let secret_adder = context.sender;
    let secret_sponsored_for: u128 = u128.Zero;

    let orphan = new Orphan(secret_name,secret_id,secret_adder,secret_birth_year,secret_gender,secret_country,secret_sponsored_for);

    orphans.set(secret_id,orphan);

}

// add an orphan to be sponsored (only allowed accounts can do)
export function add_orphan(full_name:string, birthYear:string, gendeR:string, country:string): void{

    assert(context.sender==context.contractName,"Transaction was unsuccessful: Only allowed accounts can register an orphan.");

 
    let birth_year:u16 = parseInt(birthYear) as u16;
    let gender:bool = (gendeR=="male")?false:true;
    let adder = context.sender;
    let sponsored_for: u128 = u128.Zero;
    let orphan_id: u64 = 0;

    if (orphans.length == 0) {
        storage.set<u64>("orphan_id",1);
        orphan_id = storage.getSome<u64>("orphan_id");
        add_secret();
    }
    else {
        orphan_id = storage.getSome<u64>("orphan_id") + 1;
        storage.set<u64>("orphan_id",orphan_id);
    }

    
    let orphan = new Orphan(full_name,orphan_id,adder,birth_year,gender,country,sponsored_for);

    orphans.set(orphan_id,orphan);


}

// unregister an orphan if needed (only allowed accounts can do)
export function unregister_orphan(orphan_id:string):void{

    assert(context.sender==context.contractName,"Transaction was unsuccessful: Only allowed accounts can unregister an orphan.");
    assert(orphans.contains(parseInt(orphan_id) as u64), "Transaction was unsuccessful: The orphan id that you entered does not exist, try again with different orphan id.");
    assert(orphans.length != 0, "Transaction was unsuccessful: There is no orphan added yet.");
    assert(parseInt(orphan_id) as u64 !== 0 as u64, "The member with id 0 cannot be unregistered.");

    if (orphans.getSome(0 as u64).orphan_id === 0 as u64 ) {
        let orphan_to_change = orphans.getSome(0 as u64);
        orphan_to_change.add_to_sponsored(orphans.getSome(parseInt(orphan_id) as u64).sponsored_for);
        orphans.set(0 as u64,orphan_to_change);
    }

    orphans.delete(parseInt(orphan_id) as u64);

    logging.log("The orphan with id: " + orphan_id +" was unregistered.");

}

//sponsor an orphan by id
export function sponsor_by_id(orphan_id:string):void {

    assert(orphans.length != 0, "Transaction was unsuccessful: There is no orphan to sponsor yet.");
    assert(orphans.contains(parseInt(orphan_id) as u64), "Transaction was unsuccessful: The orphan id that you entered does not exist, try again with different orphan id.");
    assert(context.attachedDeposit >= u128.fromString("0.2"), "Transaction was unsuccessful: The sponsorship amount should be at least 0.2 Near.");

    let orphan_to_sponsor = orphans.getSome(parseInt(orphan_id) as u64);
    orphan_to_sponsor.sponsor();

    ContractPromiseBatch.create(context.contractName).transfer(context.attachedDeposit);

    orphans.set(parseInt(orphan_id) as u64,orphan_to_sponsor);

    logging.log("The sponsorship to orphan with id: "+ orphan_id + " was successful.");
}


/**********  view methods ***********/

//learn about an orphan by id
export function orphan_details(orphan_id:string): Orphan{
    assert(orphans.length != 0, "Transaction was unsuccessful: There is no orphan to learn about yet.");
    assert(orphans.contains(parseInt(orphan_id) as u64), "Transaction was unsuccessful: The orphan id that you entered does not exist, try again with different orphan id.");

    return orphans.getSome(parseInt(orphan_id) as u64);
}

//list orphans
export function list_orphans(): Orphan[]{

    return orphans.values();
}

//unregister all orphans (for demo purposes)
export function unregister_all_orphans(): void{
    
    assert(context.contractName==context.sender,"Transaction was unsuccessful: Only allowed accounts can unregister.");
    assert(orphans.length != 0, "Transaction was unsuccessful: There is no orphan added yet.");

    orphans.clear();
    logging.log("The transaction was successful.");
}

//number of current orphans

export function orphans_length(): number {
    return orphans.length;
}