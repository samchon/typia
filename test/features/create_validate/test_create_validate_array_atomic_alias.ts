import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_array_atomic_alias = _test_validate(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createValidate<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
