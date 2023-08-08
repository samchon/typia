import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_isParse_ObjectUnionNonPredictable = _test_json_isParse(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.json.isParse<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
