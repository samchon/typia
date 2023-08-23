import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_isParse_NativeUnion = _test_json_isParse(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input) => typia.json.isParse<NativeUnion>(input));
