import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagMatrix = (): void => _test_json_assertParse(TypeGuardError)(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.json.createAssertParse<TypeTagMatrix>());
