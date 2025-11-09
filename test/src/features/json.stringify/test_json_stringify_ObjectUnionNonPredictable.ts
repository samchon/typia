import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_stringify_ObjectUnionNonPredictable = (): void => _test_json_stringify(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((input) => typia.json.stringify<ObjectUnionNonPredictable>(input));
