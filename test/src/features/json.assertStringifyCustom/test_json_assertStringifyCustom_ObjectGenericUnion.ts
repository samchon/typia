import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectGenericUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.json.assertStringify<ObjectGenericUnion>(input, (p) => new CustomGuardError(p)));
