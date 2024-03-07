import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectPropertyNullable =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.misc.createAssertClone<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
