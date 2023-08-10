import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_assertStringify_ObjectUnionNonPredictable =
    _test_json_assertStringify<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )((input) => typia.json.assertStringify<ObjectUnionNonPredictable>(input));
