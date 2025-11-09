import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ClassGetter = (): void => _test_json_assertStringify(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.json.assertStringify<ClassGetter>(input, (p) => new CustomGuardError(p)));
