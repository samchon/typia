import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is } from "./_test_is";

export const test_is_array_alias = _test_is(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.is(input),
);
