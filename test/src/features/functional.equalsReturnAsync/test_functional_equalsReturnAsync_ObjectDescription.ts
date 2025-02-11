import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsReturnAsync_ObjectDescription =
  _test_functional_equalsReturnAsync("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.equalsReturn(p),
  );
