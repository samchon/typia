import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validate } from "./_test_validate";

export const test_validate_array_atomic_alias = _test_validate(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.validate(input),
    ArrayAtomicAlias.SPOILERS,
);
