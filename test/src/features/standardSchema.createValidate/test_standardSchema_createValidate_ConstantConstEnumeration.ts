import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_standardSchema_createValidate_ConstantConstEnumeration =
  (): void =>
    _test_standardSchema_validate(
      "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
      typia.createValidate<ConstantConstEnumeration>(),
    );
