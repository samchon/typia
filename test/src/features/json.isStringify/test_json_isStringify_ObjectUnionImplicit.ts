import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_isStringify_ObjectUnionImplicit = (): void => _test_json_isStringify(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.json.isStringify<ObjectUnionImplicit>(input));
