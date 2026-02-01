import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createEquals_TupleRestObject = (): void => _test_equals(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.createEquals<TupleRestObject>());
