import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_isStringify_ObjectGenericUnion = (): void => _test_json_isStringify(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.json.isStringify<ObjectGenericUnion>(input));
