import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateParameters_AtomicUnion =
  _test_functional_validateParameters("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.validateParameters(p),
  );
