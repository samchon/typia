import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_stringify_NativeSimple =
    _test_json_stringify<NativeSimple>(NativeSimple)((input) =>
        typia.json.stringify<NativeSimple>(input),
    );
