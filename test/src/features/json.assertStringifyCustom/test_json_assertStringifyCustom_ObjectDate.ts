import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectDate = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)((input) => typia.json.assertStringify<ObjectDate>(input, (p) => new CustomGuardError(p)));
