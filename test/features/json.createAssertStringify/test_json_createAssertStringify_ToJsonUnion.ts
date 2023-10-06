import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_createAssertStringify_ToJsonUnion = _test_json_assertStringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.json.createAssertStringify<ToJsonUnion>());
