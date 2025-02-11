import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectHttpFormData = _test_assert(TypeGuardError)(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)(typia.createAssert<ObjectHttpFormData>());
