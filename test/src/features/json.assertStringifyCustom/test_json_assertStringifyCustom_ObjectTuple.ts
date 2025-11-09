import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectTuple = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.json.assertStringify<ObjectTuple>(input, (p) => new CustomGuardError(p)));
