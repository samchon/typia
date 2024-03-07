import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectHttpUndefindable = _test_assert(
  TypeGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  typia.createAssert<ObjectHttpUndefindable>(),
);
