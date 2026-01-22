import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createIs_FunctionalValueUnion = (): void =>
  _test_is("FunctionalValueUnion")<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createIs<FunctionalValueUnion>(),
  );
