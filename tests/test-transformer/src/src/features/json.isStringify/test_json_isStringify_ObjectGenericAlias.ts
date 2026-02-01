import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_isStringify_ObjectGenericAlias = (): void => _test_json_isStringify(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.json.isStringify<ObjectGenericAlias>(input));
