import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_isStringify_ObjectAlias = (): void => _test_json_isStringify(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.json.isStringify<ObjectAlias>(input));
