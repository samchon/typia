import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertEqualsCustom_ObjectGenericArray = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.assertEquals<ObjectGenericArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
