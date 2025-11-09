import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectHttpConstant = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.createAssertEquals<ObjectHttpConstant>());
