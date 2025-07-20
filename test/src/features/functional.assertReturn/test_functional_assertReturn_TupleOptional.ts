import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertReturn_TupleOptional = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.assertReturn(p),
  );
