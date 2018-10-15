import { UserCollectionProxy } from "./user-collection-proxy";
import { UserCollection } from "../model/user-collection";
import { IAdvanceUserModel, IBasicUserModel } from "../interfaces/i-user-detail";

export class UserCollectionProxyForAdmin extends UserCollectionProxy {

    protected fetUserList():Array<IBasicUserModel | IAdvanceUserModel> {
        let userColl:UserCollection = new UserCollection();
        return userColl.getUserList();
    }
}