import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createValidateStringify_ObjectUnionNonPredictable =
    _test_validateStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createValidateStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
