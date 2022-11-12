import TSON from "../../src";

namespace Userspace {
    interface User {
        id: string;
        name: string;
    }

    export type UserType1 = Pick<User, "id">;
    export type UserType2 = Pick<User, "id"> & Pick<User, "name">;

    export interface UserType3 extends Pick<User, "id" | "name"> {}
    export interface UserType4 {
        id: number;
        name: string;
    }
}

TSON.createIs<Userspace.UserType1>();
TSON.createIs<Userspace.UserType2>();
TSON.createIs<Userspace.UserType3>();
TSON.createIs<Userspace.UserType4>();
