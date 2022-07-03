import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is } from "./_test_is";

export const test_is_array_alias = _test_is(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0]![0]! = "boolean" as any),
        (input) => (input[1]![0]! = "number" as any),
        (input) => (input[2]![0]! = false as any as string),
    ],
);
