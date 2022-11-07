import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_property_nullable = _test_assert_type(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.assertType(input),
    ObjectPropertyNullable.SPOILERS,
);
