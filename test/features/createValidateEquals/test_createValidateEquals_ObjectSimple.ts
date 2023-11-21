import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createValidateEquals_ObjectSimple = _test_validateEquals(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(typia.createValidateEquals<ObjectSimple>());
