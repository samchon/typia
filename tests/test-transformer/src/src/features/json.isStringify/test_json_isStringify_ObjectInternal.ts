import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_isStringify_ObjectInternal = (): void => _test_json_isStringify(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.json.isStringify<ObjectInternal>(input));
