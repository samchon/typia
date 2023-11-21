import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createEquals_ArraySimple = _test_equals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createEquals<ArraySimple>());
