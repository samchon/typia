import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_clone_ObjectLiteralType = _test_clone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.clone<ObjectLiteralType>(input),
);
