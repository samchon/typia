import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_stringify_NativeUnion = _test_json_stringify(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((input) => typia.json.stringify<NativeUnion>(input));
