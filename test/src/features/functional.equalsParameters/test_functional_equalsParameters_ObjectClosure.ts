import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsParameters_ObjectClosure = (): void =>
  _test_functional_equalsParameters("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.equalsParameters(p),
  );
