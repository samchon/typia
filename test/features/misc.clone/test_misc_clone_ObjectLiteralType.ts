import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_clone_ObjectLiteralType = _test_misc_clone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.misc.clone(input),
);
