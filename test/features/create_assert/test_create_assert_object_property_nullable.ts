import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_property_nullable = _test_assert(
    "nullable object property",
    ObjectPropertyNullable.generate,
    TSON.createAssertType<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
