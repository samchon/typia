import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectGenericArray = _test_assertEquals(
  CustomGuardError,
)("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.assertEquals<ObjectGenericArray>(input, (p) => new CustomGuardError(p)),
);
