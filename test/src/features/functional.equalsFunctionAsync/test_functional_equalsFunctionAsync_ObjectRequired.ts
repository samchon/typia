import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsFunctionAsync_ObjectRequired =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectRequired")(ObjectRequired)(
      (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
        typia.functional.equalsFunction(p),
    );
