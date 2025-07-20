import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createAssertClone_ObjectPropertyNullable = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.misc.createAssertClone<ObjectPropertyNullable>(),
  );
