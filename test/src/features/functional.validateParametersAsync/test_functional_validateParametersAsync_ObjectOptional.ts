import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateParametersAsync_ObjectOptional =
  _test_functional_validateParametersAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.validateParameters(p),
  );
