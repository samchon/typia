import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_validateStringify_TupleRestArray = (): void => _test_json_validateStringify(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.json.validateStringify<TupleRestArray>(input));
