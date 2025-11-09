import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_isFunction_ConstantConstEnumeration = (): void =>
  _test_functional_isFunction("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
    typia.functional.isFunction(p),
  );
