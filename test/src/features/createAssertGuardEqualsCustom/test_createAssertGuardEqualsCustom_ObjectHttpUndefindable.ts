import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectHttpUndefindable = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createAssertGuardEquals<ObjectHttpUndefindable>((p) => new CustomGuardError(p)));
