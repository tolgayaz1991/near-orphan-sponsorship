const gas_amount = 100000000000000;

/**********  view methods ***********/

// get all orphans
export function list_orphans() {

    return window.contract.list_orphans();
    
}

// get the number of all orphans
export function orphans_length() {
    return window.contract.orphans_length();

}

// get details about an orphan by id
export function orphan_details({orphan_id}) {

    return window.contract.orphan_details({orphan_id});
    
}

  
/**********  change methods ***********/

// sponsor an orphan by id
export async function sponsor_by_id({ id, near_amount }) {
    await window.contract.sponsor_by_id({ orphan_id: id }, gas_amount, near_amount);
}

/*** The functions below are only for allowed accounts normally ***/

// add an orphan (only for allowed accounts)
export function add_orphan({ name,birthYeaR,genderr,countrY }) {
    return window.contract.add_orphan({ full_name:name,birthYear: birthYeaR,gendeR:genderr,country:countrY }, gas_amount, undefined);
}

// unregister an orphan (only for allowed accounts)
export function unregister_orphan({id}) {
    return window.contract.unregister_orphan({orphan_id: id});
}

// unregister all orphans (only for allowed accounts)
export function unregister_all_orphans() {
    return window.contract.unregister_all_orphans();
}