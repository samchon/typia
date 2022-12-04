import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectLiteralProperty =
    _test_validateParse(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        TSON.createValidateParse<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
