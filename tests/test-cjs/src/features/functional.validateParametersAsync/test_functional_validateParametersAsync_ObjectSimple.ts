import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateParametersAsync_ObjectSimple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectSimple")(ObjectSimple)(
      (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
        typia.functional.validateParameters(p),
    );
