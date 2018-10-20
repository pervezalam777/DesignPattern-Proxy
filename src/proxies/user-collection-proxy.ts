import { IUserCollection, IBasicUserModel, IAdvanceUserModel } from "../interfaces/i-user-detail";
import { UserCollection } from "../model/user-collection";

export class UserCollectionProxy implements IUserCollection {
    private cacheFNameSearchResults:any = [];
    private cacheLNameSearchResults:any = [];
    private userCollection:Array<IBasicUserModel | IAdvanceUserModel> | null = null;
    // Hold data of userCollection for defined minutes
    private holdForMinute:number = 2;
    private interval:number = -1;

    getUserByFirstName(keyword:string):Array<IBasicUserModel>{
        let results = this.cacheFNameSearchResults[keyword] || null
        if(results === null){
            let userColl:UserCollection = new UserCollection();
            results = userColl.getUserByFirstName(keyword);
            this.cacheFNameSearchResults[keyword] = results;
        }
        return <Array<IBasicUserModel>>results;
    }
    
    getUserByLastName(keyword:string):Array<IBasicUserModel>{
        let results = this.cacheLNameSearchResults[keyword] || null
        if(results === null){
            let userColl:UserCollection = new UserCollection();
            results = userColl.getUserByLastName(keyword);
            this.cacheLNameSearchResults[keyword] = results;
        }
        return <Array<IBasicUserModel>>results;
    }

    getUserList():Array<IBasicUserModel | IAdvanceUserModel> {
        if(this.userCollection === null){
            this.userCollection = this.fetUserList();
        }
        this.setUpUserCollectionDestruction();
        return this.userCollection;
    }

    protected fetUserList():Array<IBasicUserModel | IAdvanceUserModel> {
        let userColl:UserCollection = new UserCollection();
        let list:Array<IBasicUserModel> = [];
        userColl.getUserList().reduce((cList, value) => {
            let user:IBasicUserModel = {fname:value.fname, 
                                lname:value.lname, id:value.id};
            cList.push(user);
            return cList;
        }, list)
        return list;
    }


    private setUpUserCollectionDestruction(){
        if(this.interval !== -1){
            clearTimeout(this.interval);
        }
        this.interval = setTimeout(()=>{
            this.userCollection =  null;
        }, this.holdForMinute*60*1000)
    }

}