import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createAssert_ObjectHttpFormData = (): void =>
  _test_assert(TypeGuardError)("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )(typia.createAssert<ObjectHttpFormData>());
