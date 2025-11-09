import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsFunction_AtomicAlias = (): void =>
  _test_functional_validateEqualsFunction("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.validateEqualsFunction(p),
  );
