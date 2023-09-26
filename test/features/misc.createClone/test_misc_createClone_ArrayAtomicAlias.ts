import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createClone_ArrayAtomicAlias = _test_misc_clone(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.misc.createClone<ArrayAtomicAlias>(),
);
