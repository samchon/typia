import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsReturnAsync_TupleOptional =
  _test_functional_validateEqualsReturnAsync("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.validateEqualsReturn(p),
  );
