export interface IUserCollection {
    getUserByFirstName(keyword:string):Array<IBasicUserModel>
    getUserByLastName(keyword:string):Array<IBasicUserModel>
    getUserList():Array<IBasicUserModel | IAdvanceUserModel>
}

export interface IBasicUserModel {
    fname:string,
    lname:string,
    id:string
}

export interface IAdvanceUserModel extends IBasicUserModel{
    token:string,
    phone:number,
    address:string
}