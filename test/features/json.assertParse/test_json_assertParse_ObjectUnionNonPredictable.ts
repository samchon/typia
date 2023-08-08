import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_assertParse_ObjectUnionNonPredictable =
    _test_json_assertParse(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) => typia.json.assertParse<ObjectUnionNonPredictable>(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
