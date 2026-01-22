import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_equalsFunction_ConstantConstEnumeration =
  (): void =>
    _test_functional_equalsFunction("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.equalsFunction(p),
    );
