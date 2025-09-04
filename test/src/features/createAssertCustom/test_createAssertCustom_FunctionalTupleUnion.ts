import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertCustom_FunctionalTupleUnion = (): void =>
  _test_assert(CustomGuardError)("FunctionalTupleUnion")<FunctionalTupleUnion>(
    FunctionalTupleUnion,
  )(typia.createAssert<FunctionalTupleUnion>((p) => new CustomGuardError(p)));
