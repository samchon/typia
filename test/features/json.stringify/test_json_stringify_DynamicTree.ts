import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_stringify_DynamicTree =
    _test_json_stringify<DynamicTree>(DynamicTree)((input) =>
        typia.json.stringify(input),
    );
