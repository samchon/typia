import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_assertParse_SetAlias = _test_json_assertParse(
    "SetAlias",
)<SetAlias>(SetAlias)(typia.json.createAssertParse<SetAlias>());
