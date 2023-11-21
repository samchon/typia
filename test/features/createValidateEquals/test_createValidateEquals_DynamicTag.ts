import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createValidateEquals_DynamicTag = _test_validateEquals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.createValidateEquals<DynamicTag>());
