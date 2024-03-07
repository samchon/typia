import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectUnionImplicit =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.createAssertEquals<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
