import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArrayAtomicAlias = _test_clone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.clone(input),
);
