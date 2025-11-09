import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectHttpUndefindable = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createAssertGuardEquals<ObjectHttpUndefindable>());
