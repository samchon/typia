import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createValidateClone_ObjectLiteralProperty =
    _test_validateClone(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.createValidateClone<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
