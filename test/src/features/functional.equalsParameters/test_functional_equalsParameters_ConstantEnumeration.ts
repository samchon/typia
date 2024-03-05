import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsParameters_ConstantEnumeration =
  _test_functional_equalsParameters("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.equalsParameters(p),
  );
