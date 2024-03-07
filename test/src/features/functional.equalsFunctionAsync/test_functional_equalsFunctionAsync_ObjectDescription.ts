import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsFunctionAsync_ObjectDescription =
  _test_functional_equalsFunctionAsync("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.equalsFunction(p),
  );
