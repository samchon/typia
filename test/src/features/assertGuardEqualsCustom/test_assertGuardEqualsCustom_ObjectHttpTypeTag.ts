import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assertGuardEqualsCustom_ObjectHttpTypeTag =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.assertGuardEquals<ObjectHttpTypeTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
