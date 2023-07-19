import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_stringify_ArrayRepeatedNullable =
    _test_json_stringify<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
        typia.json.createStringify<ArrayRepeatedNullable>(),
    );
