import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_createIsStringify_ObjectDescription = (): void => _test_json_isStringify(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.json.createIsStringify<ObjectDescription>());
