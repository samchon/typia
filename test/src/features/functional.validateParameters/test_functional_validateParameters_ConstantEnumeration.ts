import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateParameters_ConstantEnumeration =
  _test_functional_validateParameters("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.validateParameters(p),
  );
