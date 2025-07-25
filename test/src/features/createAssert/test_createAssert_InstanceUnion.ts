import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_createAssert_InstanceUnion = (): void =>
  _test_assert(TypeGuardError)("InstanceUnion")<InstanceUnion>(InstanceUnion)(
    typia.createAssert<InstanceUnion>(),
  );
