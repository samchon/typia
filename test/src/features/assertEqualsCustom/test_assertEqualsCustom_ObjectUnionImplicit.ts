import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertEqualsCustom_ObjectUnionImplicit = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.assertEquals<ObjectUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
