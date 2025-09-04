import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssert_ObjectJsonTag = (): void =>
  _test_assert(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.createAssert<ObjectJsonTag>(),
  );
