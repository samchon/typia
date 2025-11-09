import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TypeTagMatrix = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.json.createAssertStringify<TypeTagMatrix>((p) => new CustomGuardError(p)));
