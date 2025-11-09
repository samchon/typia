import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectHttpConstant = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.createAssertGuardEquals<ObjectHttpConstant>((p) => new CustomGuardError(p)));
