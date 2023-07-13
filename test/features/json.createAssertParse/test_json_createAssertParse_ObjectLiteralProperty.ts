import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_assertParse_ObjectLiteralProperty =
    _test_json_assertParse(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.json.createAssertParse<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
