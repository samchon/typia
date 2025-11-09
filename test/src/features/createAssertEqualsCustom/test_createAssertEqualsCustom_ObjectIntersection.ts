import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectIntersection = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.createAssertEquals<ObjectIntersection>((p) => new CustomGuardError(p)));
