import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertStringify_ObjectLiteralType =
    _test_json_assertStringify(
        "ObjectLiteralType",
        ObjectLiteralType.generate,
        (input) => typia.json.assertStringify(input),
        ObjectLiteralType.SPOILERS,
    );
