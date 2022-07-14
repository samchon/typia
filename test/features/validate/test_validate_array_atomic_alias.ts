import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validate } from "./_test_validate";

export const test_validate_array_atomic_alias = _test_validate(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0]![0]! = "boolean" as any;
    //         return ["$input[0][0]"];
    //     },
    //     (input) => {
    //         input[1]![0]! = "number" as any;
    //         return ["$input[1][0]"];
    //     },
    //     (input) => {
    //         input[2]![0]! = false as any;
    //         return ["$input[2][0]"];
    //     },
    // ],
);
