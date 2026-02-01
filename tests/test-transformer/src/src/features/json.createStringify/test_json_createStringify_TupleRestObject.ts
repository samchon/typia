import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createStringify_TupleRestObject = (): void => _test_json_stringify(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.json.createStringify<TupleRestObject>());
