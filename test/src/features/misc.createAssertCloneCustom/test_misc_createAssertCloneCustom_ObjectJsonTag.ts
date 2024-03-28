import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createAssertCloneCustom_ObjectJsonTag =
  _test_misc_assertClone(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.misc.createAssertClone<ObjectJsonTag>((p) => new CustomGuardError(p)),
  );
