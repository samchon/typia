import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_stringify_TupleRestArray = (): void => _test_json_stringify(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.json.stringify<TupleRestArray>(input));
