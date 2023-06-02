import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_clone_ArrayAtomicAlias = _test_clone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.clone(input),
);
