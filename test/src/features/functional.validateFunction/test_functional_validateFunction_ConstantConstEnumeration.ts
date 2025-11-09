import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateFunction_ConstantConstEnumeration =
  (): void =>
    _test_functional_validateFunction("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.validateFunction(p),
    );
