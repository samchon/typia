import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_stringify_DynamicConstant =
    _test_json_stringify<DynamicConstant>(DynamicConstant)((input) =>
        typia.json.stringify<DynamicConstant>(input),
    );
