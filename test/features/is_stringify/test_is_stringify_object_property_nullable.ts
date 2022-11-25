import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_property_nullable = _test_is_stringify(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.isStringify(input),
    ObjectPropertyNullable.SPOILERS,
);
