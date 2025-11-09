import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_assertCloneCustom_TypeTagObjectUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.misc.assertClone<TypeTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
