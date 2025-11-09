import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isParameters_ObjectClosure = (): void =>
  _test_functional_isParameters("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.isParameters(p),
  );
