import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertEqualsCustom_ObjectUnionExplicit = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.createAssertEquals<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
