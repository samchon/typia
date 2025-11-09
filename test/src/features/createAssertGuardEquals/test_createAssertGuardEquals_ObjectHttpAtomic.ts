import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectHttpAtomic = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.createAssertGuardEquals<ObjectHttpAtomic>());
