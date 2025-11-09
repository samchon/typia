import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_reflect_metadata_ConstantConstEnumeration = (): void =>
  _test_reflect_metadata("ConstantConstEnumeration")(
    typia.reflect.metadata<[ConstantConstEnumeration]>(),
  );
