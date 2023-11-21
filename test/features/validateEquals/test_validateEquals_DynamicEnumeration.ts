import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_validateEquals_DynamicEnumeration = _test_validateEquals(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.validateEquals<DynamicEnumeration>(input),
);
