import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_assertCloneCustom_ObjectJsonTag = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) =>
    typia.misc.assertClone<ObjectJsonTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
