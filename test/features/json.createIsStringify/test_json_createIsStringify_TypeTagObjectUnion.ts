import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createIsStringify_TypeTagObjectUnion = _test_json_isStringify(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.json.createIsStringify<TypeTagObjectUnion>());
