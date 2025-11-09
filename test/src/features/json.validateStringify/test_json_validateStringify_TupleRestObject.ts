import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_validateStringify_TupleRestObject = (): void => _test_json_validateStringify(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.json.validateStringify<TupleRestObject>(input));
