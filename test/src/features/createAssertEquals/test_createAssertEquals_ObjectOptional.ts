import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectOptional = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.createAssertEquals<ObjectOptional>());
