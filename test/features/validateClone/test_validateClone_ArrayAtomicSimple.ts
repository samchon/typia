import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ArrayAtomicSimple = _test_validateClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.validateClone(input),
    ArrayAtomicSimple.SPOILERS,
);
