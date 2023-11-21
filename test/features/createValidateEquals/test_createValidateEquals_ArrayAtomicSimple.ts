import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidateEquals_ArrayAtomicSimple = _test_validateEquals(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.createValidateEquals<ArrayAtomicSimple>(),
);
