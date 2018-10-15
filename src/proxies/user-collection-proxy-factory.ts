import { UserCollectionProxy } from "./user-collection-proxy";
import { UserCollectionProxyForAdmin } from "./user-collection-proxy-admin";

export const FOR_ROLE = {
    SINGLE:"singleuser",
    ADMIN:"admin"
}

export class UserCollectionProxyFactory  {
    public static create(userRole = FOR_ROLE.SINGLE){
        if(userRole === FOR_ROLE.ADMIN){
            return new UserCollectionProxyForAdmin()
        }
        return new UserCollectionProxy()
    }
}