import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertGuardEqualsCustom_ObjectJsonTag =
  _test_assertGuardEquals(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) =>
    typia.assertGuardEquals<ObjectJsonTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
