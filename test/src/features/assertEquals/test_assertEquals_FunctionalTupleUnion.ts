import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertEquals_FunctionalTupleUnion = (): void =>
  _test_assertEquals(TypeGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
    typia.assertEquals<FunctionalTupleUnion>(input),
  );
