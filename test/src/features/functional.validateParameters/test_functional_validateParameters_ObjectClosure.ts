import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateParameters_ObjectClosure = (): void =>
  _test_functional_validateParameters("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.validateParameters(p),
  );
