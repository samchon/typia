import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createValidate_ObjectSimple = _test_validate(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(typia.createValidate<ObjectSimple>());
