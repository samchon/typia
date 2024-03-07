import typia from "typia";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantConstEnumeration =
  _test_reflect_metadata("ConstantConstEnumeration")(
    typia.reflect.metadata<[ConstantConstEnumeration]>(),
  );
