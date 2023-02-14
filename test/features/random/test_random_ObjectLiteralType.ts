import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectLiteralType = _test_random(
    "ObjectLiteralType",
    () => typia.random<ObjectLiteralType>(),
    typia.createAssert<typia.Primitive<ObjectLiteralType>>(),
);