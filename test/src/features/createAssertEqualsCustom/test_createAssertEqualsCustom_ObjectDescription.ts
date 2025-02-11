import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertEqualsCustom_ObjectDescription =
  _test_assertEquals(CustomGuardError)("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(
    typia.createAssertEquals<ObjectDescription>((p) => new CustomGuardError(p)),
  );
