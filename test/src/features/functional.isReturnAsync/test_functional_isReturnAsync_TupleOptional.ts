import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isReturnAsync_TupleOptional =
  _test_functional_isReturnAsync("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.isReturn(p),
  );
