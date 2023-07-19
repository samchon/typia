import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_stringify_DynamicUndefined =
    _test_json_stringify<DynamicUndefined>(DynamicUndefined)((input) =>
        typia.json.stringify(input),
    );
