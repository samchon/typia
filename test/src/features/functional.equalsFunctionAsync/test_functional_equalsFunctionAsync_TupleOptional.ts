import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsFunctionAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TupleOptional")(TupleOptional)(
      (p: (input: TupleOptional) => Promise<TupleOptional>) =>
        typia.functional.equalsFunction(p),
    );
