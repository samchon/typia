import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_literal_property =
    _test_assert_stringify(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        (input) => TSON.assertStringify(input),
        ObjectLiteralProperty.SPOILERS,
    );
