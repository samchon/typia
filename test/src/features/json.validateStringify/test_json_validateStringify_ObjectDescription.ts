import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_validateStringify_ObjectDescription = (): void => _test_json_validateStringify(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.json.validateStringify<ObjectDescription>(input));
