import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createValidateEquals_ObjectUndefined = _test_validateEquals(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
  typia.createValidateEquals<ObjectUndefined>(),
);
