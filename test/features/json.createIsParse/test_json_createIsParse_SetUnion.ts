import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_isParse_SetUnion = _test_json_isParse(
    "SetUnion",
)<SetUnion>(SetUnion)(typia.json.createIsParse<SetUnion>());
