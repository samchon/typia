import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is } from "./_test_is";

export const test_is_object_union_non_predictable = _test_is(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].value.value.value.value = [] as any),
        (input) => (input[1].value.value.value.value = {} as any),
        (input) => (input[2].value.value.value = null!),
        (input) => (input[3].value.value.value = undefined!),
    ],
);
