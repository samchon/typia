import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertEquals_DynamicTemplate = _test_assertEquals(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(
  typia.createAssertEquals<DynamicTemplate>(),
);
