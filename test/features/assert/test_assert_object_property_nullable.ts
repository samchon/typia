import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_object_property_nullable = _test_assert(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.assert(input),
    ObjectPropertyNullable.SPOILERS,
);
