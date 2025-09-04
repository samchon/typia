import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateReturn_ConstantEnumeration = (): void =>
  _test_functional_validateReturn("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.validateReturn(p),
  );
