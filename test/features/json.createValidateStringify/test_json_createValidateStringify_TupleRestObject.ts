import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createValidateStringify_TupleRestObject = _test_json_validateStringify(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.json.createValidateStringify<TupleRestObject>());
