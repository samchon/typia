import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_stringify_ToJsonNull = _test_json_stringify<ToJsonNull>(
    ToJsonNull,
)(typia.json.createStringify<ToJsonNull>());
