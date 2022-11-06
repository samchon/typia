import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_clone } from "./_test_clone";

export const test_clone_object_property_nullable = _test_clone(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.clone(input),
);
