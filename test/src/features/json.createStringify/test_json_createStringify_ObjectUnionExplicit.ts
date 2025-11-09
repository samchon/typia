import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createStringify_ObjectUnionExplicit = (): void => _test_json_stringify(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.json.createStringify<ObjectUnionExplicit>());
