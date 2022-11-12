import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_property_nullable = _test_assert_clone(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.assertClone(input),
    ObjectPropertyNullable.SPOILERS,
);
