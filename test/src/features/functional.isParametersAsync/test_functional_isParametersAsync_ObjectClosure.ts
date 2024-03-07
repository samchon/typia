import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isParametersAsync_ObjectClosure =
  _test_functional_isParametersAsync("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.isParameters(p),
  );
