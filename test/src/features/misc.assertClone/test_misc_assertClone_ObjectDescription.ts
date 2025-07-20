import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertClone_ObjectDescription = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.misc.assertClone<ObjectDescription>(input),
  );
