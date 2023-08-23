import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_assertParse_NativeUnion = _test_json_assertParse(
    "NativeUnion",
)<NativeUnion>(NativeUnion)(typia.json.createAssertParse<NativeUnion>());
