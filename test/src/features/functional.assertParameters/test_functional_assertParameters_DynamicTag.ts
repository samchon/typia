import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertParameters_DynamicTag = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.assertParameters(p),
  );
