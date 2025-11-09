import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsReturnAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TupleOptional")(TupleOptional)(
      (p: (input: TupleOptional) => Promise<TupleOptional>) =>
        typia.functional.equalsReturn(p),
    );
