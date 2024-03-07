import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectJsonTag =
  _test_assertGuardEquals(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.createAssertGuardEquals<ObjectJsonTag>(
      (p) => new CustomGuardError(p),
    ),
  );
