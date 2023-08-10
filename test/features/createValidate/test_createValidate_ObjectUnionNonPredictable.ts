import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_validate_ObjectUnionNonPredictable =
    _test_validate<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
        typia.createValidate<ObjectUnionNonPredictable>(),
    );
