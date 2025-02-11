import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertEqualsCustom_ObjectUnionExplicitPointer =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.createAssertEquals<ObjectUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
