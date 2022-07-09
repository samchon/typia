import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_object_union_non_predictable = _test_assert_for_of(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.value.value.value.value = null!;
            return "$input.value.value";
        },
        (input) => {
            input.value.value.value.value = undefined!;
            return "$input.value.value";
        },
        (input) => {
            input.value.value.value.value = [] as any;
            return "$input.value.value";
        },
        (input) => {
            input.value.value.value.value = {} as any;
            return "$input.value.value";
        },
    ],
);
