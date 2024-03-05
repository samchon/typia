import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateParameters_ClassClosure =
  _test_functional_validateParameters("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.validateParameters(p),
  );
