import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_assertCustom_InstanceUnion = (): void =>
  _test_assert(CustomGuardError)("InstanceUnion")<InstanceUnion>(InstanceUnion)(
    (input) =>
      typia.assert<InstanceUnion>(input, (p) => new CustomGuardError(p)),
  );
