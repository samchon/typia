import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_property_nullable = _test_assert_equals(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.assertEquals(input),
);
