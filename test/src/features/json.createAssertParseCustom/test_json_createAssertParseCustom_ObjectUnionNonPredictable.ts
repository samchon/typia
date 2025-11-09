import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectUnionNonPredictable = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.json.createAssertParse<ObjectUnionNonPredictable>((p) => new CustomGuardError(p)));
