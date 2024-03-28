import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertGuardEqualsCustom_ObjectUnionDouble =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.createAssertGuardEquals<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
