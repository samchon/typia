import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_literal_property =
    _test_is_stringify(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        TSON.createIsStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
