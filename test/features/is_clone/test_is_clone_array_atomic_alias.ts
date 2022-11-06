import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_atomic_alias = _test_is_clone(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.isClone(input),
    ArrayAtomicAlias.SPOILERS,
);
