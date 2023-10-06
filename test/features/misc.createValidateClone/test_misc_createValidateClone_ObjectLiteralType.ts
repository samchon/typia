import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createValidateClone_ObjectLiteralType = _test_misc_validateClone(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)(typia.misc.createValidateClone<ObjectLiteralType>());
