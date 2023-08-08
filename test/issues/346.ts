import typia from "typia";

interface Boolean {
    special: "value";
}
type Number = Boolean;
type BigInt = Boolean;
type String = Boolean;

interface ISpecial {
    boolean: boolean;
    Boolean: Boolean;
    number: number;
    Number: Number;
    bigint: bigint;
    BigInt: BigInt;
    string: string;
    String: String;
}
typia.createIs<ISpecial>();
