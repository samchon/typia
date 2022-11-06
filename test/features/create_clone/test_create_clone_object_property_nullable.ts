import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_property_nullable = _test_clone(
    "nullable object property",
    ObjectPropertyNullable.generate,
    TSON.createClone<ObjectPropertyNullable>(),
);
