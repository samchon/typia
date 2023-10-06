import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_assertParse_ObjectPartial = _test_json_assertParse(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.json.assertParse<ObjectPartial>(input));
