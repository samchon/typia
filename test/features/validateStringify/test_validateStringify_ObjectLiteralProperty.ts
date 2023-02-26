import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validateStringify_ObjectLiteralProperty =
    _test_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (input) => typia.validateStringify(input),
        ObjectLiteralProperty.SPOILERS,
    );
