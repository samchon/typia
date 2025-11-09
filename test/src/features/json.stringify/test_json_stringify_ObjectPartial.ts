import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_stringify_ObjectPartial = (): void => _test_json_stringify(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.json.stringify<ObjectPartial>(input));
