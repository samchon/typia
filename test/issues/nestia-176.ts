import typia from "../../src";

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

typia.createIs<Userspace.UserType1>();
typia.createIs<Userspace.UserType2>();
typia.createIs<Userspace.UserType3>();
typia.createIs<Userspace.UserType4>();
