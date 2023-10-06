import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_assertStringify_ObjectPartial = _test_json_assertStringify(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.json.assertStringify<ObjectPartial>(input));
