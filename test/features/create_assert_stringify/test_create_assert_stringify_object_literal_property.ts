import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_literal_property =
    _test_assert_stringify(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        TSON.createAssertStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
