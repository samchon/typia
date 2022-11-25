import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "../internal/_test_is";

export const test_is_object_property_nullable = _test_is(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.is(input),
    ObjectPropertyNullable.SPOILERS,
);
