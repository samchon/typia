import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "./_test_is";

export const test_is_object_property_nullable = _test_is(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0][0].value = undefined!),
        (input) => (input[1][0].value = false as any),
        (input) => (input[2][0].value = {} as any),
        (input) => (input[3][0].value = [] as any),
        (input) => (input[3][0].value!.grade = null!),
    ],
);
