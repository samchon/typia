import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_property_nullable =
    _test_assert_stringify(
        "nullable object property",
        ObjectPropertyNullable.generate,
        (input) => TSON.assertStringify(input),
        ObjectPropertyNullable.SPOILERS,
    );
