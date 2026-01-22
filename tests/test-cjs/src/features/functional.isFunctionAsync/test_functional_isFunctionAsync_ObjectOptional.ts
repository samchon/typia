import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isFunctionAsync_ObjectOptional =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectOptional")(ObjectOptional)(
      (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
        typia.functional.isFunction(p),
    );
