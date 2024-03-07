import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectUnionExplicit =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.createAssertEquals<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
