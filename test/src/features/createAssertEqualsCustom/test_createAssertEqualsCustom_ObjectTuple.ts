import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectTuple = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createAssertEquals<ObjectTuple>((p) => new CustomGuardError(p)));
