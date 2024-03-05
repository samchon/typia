import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsParameters_AtomicSimple =
  _test_functional_validateEqualsParameters("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.validateEqualsParameters(p),
  );
