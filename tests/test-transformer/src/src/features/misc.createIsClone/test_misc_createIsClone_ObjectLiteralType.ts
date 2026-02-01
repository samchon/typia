import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createIsClone_ObjectLiteralType = (): void => _test_misc_isClone(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)(typia.misc.createIsClone<ObjectLiteralType>());
