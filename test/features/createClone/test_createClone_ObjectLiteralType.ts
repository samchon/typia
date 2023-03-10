import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createClone_ObjectLiteralType = _test_clone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createClone<ObjectLiteralType>(),
);
