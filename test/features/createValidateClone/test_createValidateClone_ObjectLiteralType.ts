import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ObjectLiteralType = _test_validateClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidateClone<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
