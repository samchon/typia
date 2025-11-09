import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectUnionNonPredictable = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((input) => typia.json.assertStringify<ObjectUnionNonPredictable>(input, (p) => new CustomGuardError(p)));
