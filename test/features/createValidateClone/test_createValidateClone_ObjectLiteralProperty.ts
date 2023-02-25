import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectLiteralProperty =
    _test_validateClone(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.createValidateClone<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
