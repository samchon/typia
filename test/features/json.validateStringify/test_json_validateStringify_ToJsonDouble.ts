import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_validateStringify_ToJsonDouble = _test_json_validateStringify(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.json.validateStringify<ToJsonDouble>(input));
