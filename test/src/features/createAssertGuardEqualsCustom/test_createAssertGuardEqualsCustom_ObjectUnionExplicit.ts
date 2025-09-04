import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertGuardEqualsCustom_ObjectUnionExplicit =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ObjectUnionExplicit",
    )<ObjectUnionExplicit>(ObjectUnionExplicit)(
      typia.createAssertGuardEquals<ObjectUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
