import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createAssertStringifyCustom_ObjectUnionNonPredictable =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.json.createAssertStringify<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
