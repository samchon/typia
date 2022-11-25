import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_property_nullable = _test_validate(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.validate(input),
    ObjectPropertyNullable.SPOILERS,
);
