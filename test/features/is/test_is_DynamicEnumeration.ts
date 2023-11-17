import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_is_DynamicEnumeration = _test_is(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.is<DynamicEnumeration>(input),
);
