import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_prune_TupleUnion = (): void =>
  _test_misc_prune("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
    typia.misc.prune<TupleUnion>(input),
  );
