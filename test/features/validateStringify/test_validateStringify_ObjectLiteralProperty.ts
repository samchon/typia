import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectLiteralProperty =
    _test_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (input) => TSON.validateStringify(input),
        ObjectLiteralProperty.SPOILERS,
    );
