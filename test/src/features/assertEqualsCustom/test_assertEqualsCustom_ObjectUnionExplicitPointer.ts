import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_assertEqualsCustom_ObjectUnionExplicitPointer =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    typia.assertEquals<ObjectUnionExplicitPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
