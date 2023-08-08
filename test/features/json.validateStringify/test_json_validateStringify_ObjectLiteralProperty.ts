import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_validateStringify_ObjectLiteralProperty =
    _test_json_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (input) => typia.json.validateStringify(input),
        ObjectLiteralProperty.SPOILERS,
    );
