import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateParametersAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectClosure")(ObjectClosure)(
      (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
        typia.functional.validateParameters(p),
    );
