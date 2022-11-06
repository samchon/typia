import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_property_nullable = _test_is_clone(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.isClone(input),
    ObjectPropertyNullable.SPOILERS,
);
