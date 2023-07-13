import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_validateStringify_ObjectLiteralProperty =
    _test_json_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.json.createValidateStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
