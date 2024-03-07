import typia from "typia";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantEnumeration = _test_reflect_metadata(
  "ConstantEnumeration",
)(typia.reflect.metadata<[ConstantEnumeration]>());
