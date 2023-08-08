import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_validateParse_ObjectLiteralProperty =
    _test_json_validateParse(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (input) => typia.json.validateParse<ObjectLiteralProperty>(input),
        ObjectLiteralProperty.SPOILERS,
    );
