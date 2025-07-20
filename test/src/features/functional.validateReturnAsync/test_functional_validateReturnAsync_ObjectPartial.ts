import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateReturnAsync_ObjectPartial =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectPartial")(ObjectPartial)(
      (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
        typia.functional.validateReturn(p),
    );
