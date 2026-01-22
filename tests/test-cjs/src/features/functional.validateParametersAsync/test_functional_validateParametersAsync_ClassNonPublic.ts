import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateParametersAsync_ClassNonPublic =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ClassNonPublic")(ClassNonPublic)(
      (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
        typia.functional.validateParameters(p),
    );
