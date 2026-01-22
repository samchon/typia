import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertReturn_UltimateUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.assertReturn(p),
  );
