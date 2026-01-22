import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsFunction_ConstantConstEnumeration =
  (): void =>
    _test_functional_validateEqualsFunction("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.validateEqualsFunction(p),
    );
