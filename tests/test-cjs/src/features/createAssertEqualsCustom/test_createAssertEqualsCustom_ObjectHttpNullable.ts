import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertEqualsCustom_ObjectHttpNullable = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.createAssertEquals<ObjectHttpNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
