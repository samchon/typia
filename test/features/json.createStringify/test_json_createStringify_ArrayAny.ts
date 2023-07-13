import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_stringify_ArrayAny = _test_json_stringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.json.createStringify<ArrayAny>(),
);
