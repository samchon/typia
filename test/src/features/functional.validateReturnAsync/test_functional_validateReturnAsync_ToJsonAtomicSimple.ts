import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_validateReturnAsync_ToJsonAtomicSimple =
  _test_functional_validateReturnAsync("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
    typia.functional.validateReturn(p),
  );
