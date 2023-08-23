import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_assertParse_SetUnion = _test_json_assertParse(
    "SetUnion",
)<SetUnion>(SetUnion)(typia.json.createAssertParse<SetUnion>());
