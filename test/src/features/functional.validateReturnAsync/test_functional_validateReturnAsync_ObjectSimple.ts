import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateReturnAsync_ObjectSimple =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectSimple")(ObjectSimple)(
      (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
        typia.functional.validateReturn(p),
    );
