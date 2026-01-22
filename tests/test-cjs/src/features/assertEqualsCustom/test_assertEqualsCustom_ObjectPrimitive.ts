import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertEqualsCustom_ObjectPrimitive = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.assertEquals<ObjectPrimitive>(input, (p) => new CustomGuardError(p)),
  );
