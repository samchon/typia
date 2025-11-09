import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createValidateParse_TypeTagAtomicUnion = (): void => _test_json_validateParse(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.json.createValidateParse<TypeTagAtomicUnion>());
