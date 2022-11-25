import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_property_nullable = _test_equals(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.equals(input),
);
