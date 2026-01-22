import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertGuardCustom_ObjectHttpTypeTag = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.createAssertGuard<ObjectHttpTypeTag>((p) => new CustomGuardError(p)));
