import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_array_atomic_simple = _test_validate(
    "atomic array",
    ArrayAtomicSimple.generate,
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
