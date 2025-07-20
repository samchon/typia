import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsReturnAsync_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) => typia.functional.validateEqualsReturn(p),
    );
