import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_validateStringify_ObjectUnionNonPredictable =
  _test_json_validateStringify(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.json.validateStringify<ObjectUnionNonPredictable>(input),
  );
