import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_assertClone_ObjectGenericUnion = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.misc.assertClone<ObjectGenericUnion>(input),
  );
