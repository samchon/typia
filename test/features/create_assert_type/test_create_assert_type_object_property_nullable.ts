import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_property_nullable = _test_assert_type(
    "nullable object property",
    ObjectPropertyNullable.generate,
    TSON.createAssertType<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
