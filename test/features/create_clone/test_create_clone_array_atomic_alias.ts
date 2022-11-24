import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_array_atomic_alias = _test_clone(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createClone<ArrayAtomicAlias>(),
);
