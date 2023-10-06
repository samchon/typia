import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createEquals_TupleRestArray = _test_equals(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createEquals<TupleRestArray>());
