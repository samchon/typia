import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_assertParse_DynamicNever = _test_json_assertParse(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.json.assertParse<DynamicNever>(input));
