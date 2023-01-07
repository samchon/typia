import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionNonPredictable = _test_validateStringify(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.validateStringify(input),
    ObjectUnionNonPredictable.SPOILERS,
);