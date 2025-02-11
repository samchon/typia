import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpConstant = _test_assert(CustomGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.createAssert<ObjectHttpConstant>((p) => new CustomGuardError(p)));
