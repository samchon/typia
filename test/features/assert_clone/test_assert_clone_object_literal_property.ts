import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_literal_property =
    _test_assert_clone(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        (input) => TSON.assertClone(input),
        ObjectLiteralProperty.SPOILERS,
    );
