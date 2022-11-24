import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_property_nullable =
    _test_assert_clone(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createAssertClone<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
