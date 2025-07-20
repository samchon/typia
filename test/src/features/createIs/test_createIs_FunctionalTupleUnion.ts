import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createIs_FunctionalTupleUnion = (): void =>
  _test_is("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)(
    typia.createIs<FunctionalTupleUnion>(),
  );
