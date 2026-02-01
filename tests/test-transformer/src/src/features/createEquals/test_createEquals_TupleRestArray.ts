import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createEquals_TupleRestArray = (): void => _test_equals(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createEquals<TupleRestArray>());
