import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_isStringify_ObjectPartial = (): void => _test_json_isStringify(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.json.isStringify<ObjectPartial>(input));
