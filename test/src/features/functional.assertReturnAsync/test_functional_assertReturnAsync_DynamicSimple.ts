import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertReturnAsync_DynamicSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertReturn(p),
  );
