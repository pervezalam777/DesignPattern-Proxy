import { IUserCollection, IAdvanceUserModel, IBasicUserModel } from "../interfaces/i-user-detail";


export class UserCollection implements IUserCollection {
    private userList:Array<IAdvanceUserModel>;

    constructor(){
        this.userList = [
            {fname:"anil", lname:"kumar", id:"001", token:"t0x1", phone:98323213, address:"delhi"},
            {fname:"sunil", lname:"kumar", id:"002", token:"t0w1", phone:98323413, address:"delhi"},
            {fname:"mukesh", lname:"kumar", id:"003", token:"t0f1", phone:98380213, address:"delhi"},
            {fname:"anil", lname:"gupta", id:"004", token:"t0x1", phone:98328213, address:"delhi"},
            {fname:"suresh", lname:"gupta", id:"005", token:"t0x1", phone:98322213, address:"delhi"},
            {fname:"akash", lname:"chopra", id:"006", token:"t0x1", phone:98321213, address:"delhi"},
            {fname:"anil", lname:"chopra", id:"007", token:"t0x1", phone:98327213, address:"delhi"},
            {fname:"gaurav", lname:"chopra", id:"008", token:"t0x1", phone:98324213, address:"delhi"},
            {fname:"bharat", lname:"verma", id:"009", token:"t0x1", phone:98325213, address:"delhi"},
            {fname:"vineet", lname:"panday", id:"010", token:"t0x1", phone:98326213, address:"delhi"},
            {fname:"anil", lname:"verma", id:"011", token:"t0x1", phone:98383213, address:"delhi"},
            {fname:"rohit", lname:"panday", id:"012", token:"t0x1", phone:98393213, address:"delhi"},
            
        ]
    }
    
    getUserByFirstName(keyword:string):Array<IBasicUserModel>{
        let list:Array<IBasicUserModel> = []
        this.userList.reduce((cList, value) => {
            if(value.fname === keyword){
                cList.push({fname:value.fname, lname:value.lname, id:value.id})
            }
            return cList
        }, list)
        return list;
    }
    
    getUserByLastName(keyword:string):Array<IBasicUserModel>{
        let list:Array<IBasicUserModel> = []
        this.userList.reduce((cList, value) => {
            if(value.lname === keyword){
                cList.push({fname:value.fname, lname:value.lname, id:value.id})
            }
            return cList
        }, list)
        return list;
    }

    getUserList():Array<IBasicUserModel | IAdvanceUserModel> {
        return this.userList;
    }
}