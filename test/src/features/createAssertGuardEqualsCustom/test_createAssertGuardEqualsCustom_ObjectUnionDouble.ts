import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectUnionDouble =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.createAssertGuardEquals<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
