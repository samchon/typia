import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_stringify_ToJsonUnion =
    _test_json_stringify<ToJsonUnion>(ToJsonUnion)((input) =>
        typia.json.stringify<ToJsonUnion>(input),
    );
