import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_validateParse_ObjectDescription = (): void => _test_json_validateParse(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.json.validateParse<ObjectDescription>(input));
