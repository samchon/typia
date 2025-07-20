import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createValidateParse_ObjectUnionNonPredictable =
  (): void =>
    _test_json_validateParse(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
      typia.json.createValidateParse<ObjectUnionNonPredictable>(),
    );
