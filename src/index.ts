import { UserCollectionProxyFactory, FOR_ROLE } from "./proxies/user-collection-proxy-factory";
import { IBasicUserModel } from "./interfaces/i-user-detail";

class Bootstrap {

    constructor(){  }

    initialize(){

        let userCollectionProxy = UserCollectionProxyFactory.create(FOR_ROLE.SINGLE);
        let collection:Array<IBasicUserModel> =  userCollectionProxy.getUserByFirstName("anil")
        console.log("users with first name 'Anil' : ", collection);

        collection =  userCollectionProxy.getUserByLastName("gupta");
        console.log("user with last name 'Gupta' : ", collection);

        let completeUserList = userCollectionProxy.getUserList();
        console.log("Basic user details :", completeUserList);


        let userCollectionProxyforAdmin = UserCollectionProxyFactory.create(FOR_ROLE.ADMIN);
        collection = userCollectionProxyforAdmin.getUserByFirstName("sunil");
        console.log("users with first name 'Sunil' : ", collection);

        collection =  userCollectionProxyforAdmin.getUserByLastName("kumar");
        console.log("user with last name 'kumar' : ", collection);

        completeUserList = userCollectionProxyforAdmin.getUserList();
        console.log("advance user details :", completeUserList);

    }
}   

let boot = new Bootstrap();
boot.initialize();  