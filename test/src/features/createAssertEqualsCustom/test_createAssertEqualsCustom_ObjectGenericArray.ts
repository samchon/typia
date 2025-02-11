import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertEqualsCustom_ObjectGenericArray =
  _test_assertEquals(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.createAssertEquals<ObjectGenericArray>(
      (p) => new CustomGuardError(p),
    ),
  );
