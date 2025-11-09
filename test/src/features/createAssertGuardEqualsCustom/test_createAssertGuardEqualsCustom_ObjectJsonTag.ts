import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssertGuardEqualsCustom_ObjectJsonTag = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.createAssertGuardEquals<ObjectJsonTag>(
      (p) => new CustomGuardError(p),
    ),
  );
