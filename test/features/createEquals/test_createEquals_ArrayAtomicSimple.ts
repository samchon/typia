import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createEquals_ArrayAtomicSimple = _test_equals(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.createEquals<ArrayAtomicSimple>(),
);
