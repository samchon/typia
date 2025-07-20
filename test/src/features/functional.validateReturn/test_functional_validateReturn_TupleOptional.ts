import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateReturn_TupleOptional = (): void =>
  _test_functional_validateReturn("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.validateReturn(p),
  );
