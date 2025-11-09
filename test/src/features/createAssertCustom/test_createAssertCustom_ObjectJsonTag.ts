import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssertCustom_ObjectJsonTag = (): void =>
  _test_assert(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.createAssert<ObjectJsonTag>((p) => new CustomGuardError(p)),
  );
