import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createIsStringify_ObjectUnionNonPredictable =
    _test_json_isStringify(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
        typia.json.createIsStringify<ObjectUnionNonPredictable>(),
    );
