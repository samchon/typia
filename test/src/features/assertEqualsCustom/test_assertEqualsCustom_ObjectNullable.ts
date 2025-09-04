import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertEqualsCustom_ObjectNullable = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    typia.assertEquals<ObjectNullable>(input, (p) => new CustomGuardError(p)),
  );
