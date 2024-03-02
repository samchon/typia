import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_assertCloneCustom_ObjectPropertyNullable =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.misc.assertClone<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
