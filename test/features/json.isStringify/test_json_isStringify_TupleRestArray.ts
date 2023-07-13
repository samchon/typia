import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_isStringify_TupleRestArray = _test_json_isStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.json.isStringify(input),
    TupleRestArray.SPOILERS,
);
