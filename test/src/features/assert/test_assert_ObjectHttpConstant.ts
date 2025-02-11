import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_assert_ObjectHttpConstant = _test_assert(TypeGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.assert<ObjectHttpConstant>(input));
