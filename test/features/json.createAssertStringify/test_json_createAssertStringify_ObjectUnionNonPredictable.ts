import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createAssertStringify_ObjectUnionNonPredictable =
    _test_json_assertStringify(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
        typia.json.createAssertStringify<ObjectUnionNonPredictable>(),
    );
