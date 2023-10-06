import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_assertParse_ObjectUnionDouble = _test_json_assertParse(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)((input) => typia.json.assertParse<ObjectUnionDouble>(input));
