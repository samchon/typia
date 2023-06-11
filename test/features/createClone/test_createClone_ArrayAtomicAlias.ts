import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createClone_ArrayAtomicAlias = _test_clone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createClone<ArrayAtomicAlias>(),
);
