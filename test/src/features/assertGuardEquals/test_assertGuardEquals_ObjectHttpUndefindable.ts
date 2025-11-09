import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectHttpUndefindable = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((input) => typia.assertGuardEquals<ObjectHttpUndefindable>(input));
