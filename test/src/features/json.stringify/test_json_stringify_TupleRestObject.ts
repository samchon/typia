import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_stringify_TupleRestObject = (): void => _test_json_stringify(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.json.stringify<TupleRestObject>(input));
