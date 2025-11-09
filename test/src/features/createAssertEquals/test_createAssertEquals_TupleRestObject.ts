import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TupleRestObject = (): void => _test_assertEquals(TypeGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.createAssertEquals<TupleRestObject>());
