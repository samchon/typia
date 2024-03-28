import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createAssertParseCustom_ObjectUnionNonPredictable =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.json.createAssertParse<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
