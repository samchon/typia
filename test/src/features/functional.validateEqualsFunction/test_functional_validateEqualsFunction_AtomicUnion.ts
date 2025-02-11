import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsFunction_AtomicUnion =
  _test_functional_validateEqualsFunction("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.validateEqualsFunction(p),
  );
