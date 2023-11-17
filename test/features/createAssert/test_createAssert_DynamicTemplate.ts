import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssert_DynamicTemplate = _test_assert(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(typia.createAssert<DynamicTemplate>());
