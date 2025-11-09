import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TupleRestObject = (): void => _test_assertEquals(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.createAssertEquals<TupleRestObject>((p) => new CustomGuardError(p)));
