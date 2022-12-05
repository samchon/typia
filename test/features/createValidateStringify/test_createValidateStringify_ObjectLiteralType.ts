import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectLiteralType =
    _test_validateStringify(
        "ObjectLiteralType",
        ObjectLiteralType.generate,
        TSON.createValidateStringify<ObjectLiteralType>(),
        ObjectLiteralType.SPOILERS,
    );
