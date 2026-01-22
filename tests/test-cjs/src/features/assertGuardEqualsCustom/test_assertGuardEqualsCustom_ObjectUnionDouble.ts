import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertGuardEqualsCustom_ObjectUnionDouble = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.assertGuardEquals<ObjectUnionDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
