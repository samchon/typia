import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagAtomicUnion = (): void => _test_json_assertParse(CustomGuardError)(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.json.assertParse<TypeTagAtomicUnion>(input, (p) => new CustomGuardError(p)));
