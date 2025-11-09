import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpFormData = (): void => _test_assert(CustomGuardError)(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)(typia.createAssert<ObjectHttpFormData>((p) => new CustomGuardError(p)));
