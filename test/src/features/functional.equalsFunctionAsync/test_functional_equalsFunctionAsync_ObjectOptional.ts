import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsFunctionAsync_ObjectOptional =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectOptional")(ObjectOptional)(
      (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
        typia.functional.equalsFunction(p),
    );
