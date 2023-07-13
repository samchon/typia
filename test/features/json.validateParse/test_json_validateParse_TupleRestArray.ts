import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_validateParse_TupleRestArray = _test_json_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.json.validateParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
