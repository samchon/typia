import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_validateParse_ObjectPartial = (): void => _test_json_validateParse(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.json.validateParse<ObjectPartial>(input));
