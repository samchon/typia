import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

export const test_assertGuard_MapSimple = (): void =>
  _test_assertGuard(TypeGuardError)("MapSimple")<MapSimple>(MapSimple)(
    (input) => typia.assertGuard<MapSimple>(input),
  );
