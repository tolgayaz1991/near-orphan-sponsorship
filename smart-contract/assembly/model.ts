import { context, storage, PersistentUnorderedMap, logging, u128} from "near-sdk-as";

let near_for_one_day = "200000000000000000000000";

// Orphan class
@nearBindgen
export class Orphan {
    full_name: string;
    orphan_id: u64;
	adder: string; //allowed users only
	birth_year: u16;
	gender: bool; //0 for male, 1 for female
	country: string;
	sponsored_for: u128;  //days
    sponsors_so_far: Map<string,u128>;

    constructor (
        full_name:string,
        orphan_id:u64,
        adder:string,
        birth_year:u16,
        gender:bool,
        country:string,
        sponsored_for:u128) {
            
            this.full_name = full_name;
            this.orphan_id = orphan_id;
            this.adder = adder;
            this.birth_year = birth_year;
            this.gender = gender;
            this.country = country;
            this.sponsored_for = sponsored_for;
            this.sponsors_so_far = new Map<string,u128>();
            logging.log("The orphan was added by "+ this.adder + " with id(note the id please): " + this.orphan_id.toString() +".");

        }

        	
	// change method(s)

	//sponsor for this orphan
	sponsor(): void {


        this.sponsored_for = u128.add(this.sponsored_for, u128.div(context.attachedDeposit,u128.fromString(near_for_one_day)));
        
        if (this.sponsors_so_far.has(context.sender)){
            let donation_so_far = this.sponsors_so_far.get(context.sender);
            this.sponsors_so_far.set(context.sender,u128.add(donation_so_far,context.attachedDeposit));
        }
        else {
        this.sponsors_so_far.set(context.sender,context.attachedDeposit);
        }

    
    }

    // add to sponsored so far
    add_to_sponsored (days_to_add:u128):void {
        this.sponsored_for = u128.add(this.sponsored_for,days_to_add);
    }

}


// orphans Mapping

export const orphans = new PersistentUnorderedMap<u64,Orphan>("o");