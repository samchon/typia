import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_property_nullable = _test_is(
    "nullable object property",
    ObjectPropertyNullable.generate,
    TSON.createIs<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
