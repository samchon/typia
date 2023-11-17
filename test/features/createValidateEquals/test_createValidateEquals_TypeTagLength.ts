import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createValidateEquals_TypeTagLength = _test_validateEquals(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.createValidateEquals<TypeTagLength>());
