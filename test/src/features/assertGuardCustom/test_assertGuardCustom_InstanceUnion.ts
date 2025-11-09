import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_assertGuardCustom_InstanceUnion = (): void =>
  _test_assertGuard(CustomGuardError)("InstanceUnion")<InstanceUnion>(
    InstanceUnion,
  )((input) =>
    typia.assertGuard<InstanceUnion>(input, (p) => new CustomGuardError(p)),
  );
