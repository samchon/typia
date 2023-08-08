import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_validateClone_ObjectLiteralType =
    _test_misc_validateClone(
        "ObjectLiteralType",
        ObjectLiteralType.generate,
        (input) => typia.misc.validateClone(input),
        ObjectLiteralType.SPOILERS,
    );
