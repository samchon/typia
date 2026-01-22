import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsFunctionAsync_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectUndefined")(ObjectUndefined)(
      (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
        typia.functional.equalsFunction(p),
    );
