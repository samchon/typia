import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateParameters_ConstantConstEnumeration =
  _test_functional_validateParameters("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
    typia.functional.validateParameters(p),
  );
