import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_literal_property =
    _test_assert_clone(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        TSON.createAssertClone<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
