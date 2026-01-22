import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isParametersAsync_ObjectDescription =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectDescription")(ObjectDescription)(
      (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
        typia.functional.isParameters(p),
    );
