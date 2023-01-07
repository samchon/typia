import typia from "../../src";

interface Member {
    id: string;
}
type Type =
    | number
    | Uint8Array
    | Set<boolean>
    | Map<any, any>
    | [string, string]
    | [boolean, number, number]
    | number[]
    | boolean[]
    | []
    | Member;
const check = typia.createValidate<Type>();

console.log(
    check(["one", "two"]),
    check([true, 1, 2]),
    check([1, 2, 3]),
    check({
        id: "id",
    }),
);

console.log(check.toString());
