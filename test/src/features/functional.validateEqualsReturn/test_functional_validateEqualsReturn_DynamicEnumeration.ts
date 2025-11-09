import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsReturn_DynamicEnumeration =
  (): void =>
    _test_functional_validateEqualsReturn("DynamicEnumeration")(
      DynamicEnumeration,
    )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      typia.functional.validateEqualsReturn(p),
    );
