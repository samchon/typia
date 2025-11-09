import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectDynamic = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.json.assertStringify<ObjectDynamic>(input, (p) => new CustomGuardError(p)));
