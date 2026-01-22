import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsParameters_ClassClosure = (): void =>
  _test_functional_equalsParameters("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.equalsParameters(p),
  );
