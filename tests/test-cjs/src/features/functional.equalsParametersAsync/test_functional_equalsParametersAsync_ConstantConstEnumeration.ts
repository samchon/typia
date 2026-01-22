import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_equalsParametersAsync_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) => typia.functional.equalsParameters(p),
    );
