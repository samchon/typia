import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createValidateParse_TypeTagObjectUnion = (): void => _test_json_validateParse(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.json.createValidateParse<TypeTagObjectUnion>());
