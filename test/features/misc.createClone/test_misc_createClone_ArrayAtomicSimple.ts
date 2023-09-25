import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createClone_ArrayAtomicSimple = _test_misc_clone(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.misc.createClone<ArrayAtomicSimple>(),
);
