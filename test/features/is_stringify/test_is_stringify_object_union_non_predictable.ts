import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_union_non_predictable =
    _test_is_stringify(
        "union object",
        ObjectUnionNonPredictable.generate,
        (input) => TSON.isStringify(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
