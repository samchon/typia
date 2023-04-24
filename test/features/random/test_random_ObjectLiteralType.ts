import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_random_ObjectLiteralType = _test_random(
    "ObjectLiteralType",
    () => typia.random<ObjectLiteralType>(),
    typia.createAssert<typia.Primitive<ObjectLiteralType>>(),
);
