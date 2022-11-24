import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_literal_property =
    _test_assert_type(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        TSON.createAssertType<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
