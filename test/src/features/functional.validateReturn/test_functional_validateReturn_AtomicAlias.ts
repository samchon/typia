import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateReturn_AtomicAlias = (): void =>
  _test_functional_validateReturn("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.validateReturn(p),
  );
