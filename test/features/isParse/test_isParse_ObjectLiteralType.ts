import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_isParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.isParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
