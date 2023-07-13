import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_stringify_ArraySimple = _test_json_stringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.json.stringify(input),
);
