import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_stringify_TupleRestArray = _test_json_stringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.json.stringify(input),
);
