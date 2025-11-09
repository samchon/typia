import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsParameters_ConstantConstEnumeration =
  (): void =>
    _test_functional_validateEqualsParameters("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.validateEqualsParameters(p),
    );
