import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isFunctionAsync_TupleOptional =
  _test_functional_isFunctionAsync("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.isFunction(p),
  );
