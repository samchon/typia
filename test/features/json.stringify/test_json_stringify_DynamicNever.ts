import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_stringify_DynamicNever =
    _test_json_stringify<DynamicNever>(DynamicNever)((input) =>
        typia.json.stringify<DynamicNever>(input),
    );
