import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateFunction_AtomicIntersection = (): void =>
  _test_functional_validateFunction("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.validateFunction(p),
  );
