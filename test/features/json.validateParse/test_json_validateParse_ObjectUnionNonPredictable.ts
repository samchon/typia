import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_validateParse_ObjectUnionNonPredictable =
    _test_json_validateParse<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )((input) => typia.json.validateParse<ObjectUnionNonPredictable>(input));
