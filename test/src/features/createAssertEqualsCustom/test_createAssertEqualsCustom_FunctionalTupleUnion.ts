import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertEqualsCustom_FunctionalTupleUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)(
    typia.createAssertEquals<FunctionalTupleUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
