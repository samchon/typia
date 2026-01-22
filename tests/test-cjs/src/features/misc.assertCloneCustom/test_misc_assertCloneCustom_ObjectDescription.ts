import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertCloneCustom_ObjectDescription = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.misc.assertClone<ObjectDescription>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
