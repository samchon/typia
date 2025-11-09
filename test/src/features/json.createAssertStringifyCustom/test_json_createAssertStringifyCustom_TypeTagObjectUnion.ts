import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TypeTagObjectUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.json.createAssertStringify<TypeTagObjectUnion>((p) => new CustomGuardError(p)));
