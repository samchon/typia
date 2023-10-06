import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_assertEquals_ArrayAtomicSimple = _test_assertEquals(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((input) => typia.assertEquals<ArrayAtomicSimple>(input));
