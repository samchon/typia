import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectHttpAtomic = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.createAssertGuardEquals<ObjectHttpAtomic>((p) => new CustomGuardError(p)));
