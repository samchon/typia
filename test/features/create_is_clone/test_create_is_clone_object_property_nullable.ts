import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_property_nullable =
    _test_is_clone(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createIsClone<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
