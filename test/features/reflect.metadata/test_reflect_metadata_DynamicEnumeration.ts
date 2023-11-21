import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_reflect_metadata_DynamicEnumeration = _test_reflect_metadata(
  "DynamicEnumeration",
)(typia.reflect.metadata<[DynamicEnumeration]>());
