import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_assertCloneCustom_ObjectGenericUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.misc.assertClone<ObjectGenericUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
