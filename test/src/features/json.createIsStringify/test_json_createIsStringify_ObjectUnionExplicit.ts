import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createIsStringify_ObjectUnionExplicit = (): void => _test_json_isStringify(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.json.createIsStringify<ObjectUnionExplicit>());
