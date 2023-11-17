import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createValidateEquals_ClassMethod = _test_validateEquals(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.createValidateEquals<ClassMethod>());
