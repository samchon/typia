import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_assertStringify_ObjectRequired = _test_json_assertStringify(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.json.assertStringify<ObjectRequired>(input));
