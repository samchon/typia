import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_equalsParameters_ConstantConstEnumeration =
  _test_functional_equalsParameters("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
    typia.functional.equalsParameters(p),
  );
