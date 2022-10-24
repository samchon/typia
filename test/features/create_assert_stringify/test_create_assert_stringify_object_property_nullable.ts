import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_property_nullable =
    _test_assert_stringify(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createAssertStringify<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
