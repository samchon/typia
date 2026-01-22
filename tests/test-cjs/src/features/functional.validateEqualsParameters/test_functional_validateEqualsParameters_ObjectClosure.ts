import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsParameters_ObjectClosure =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectClosure")(ObjectClosure)(
      (p: (input: ObjectClosure) => ObjectClosure) =>
        typia.functional.validateEqualsParameters(p),
    );
