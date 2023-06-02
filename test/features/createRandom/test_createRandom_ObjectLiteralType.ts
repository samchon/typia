import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createRandom_ObjectLiteralType = _test_random(
    "ObjectLiteralType",
    typia.createRandom<ObjectLiteralType>(),
    typia.createAssert<typia.Primitive<ObjectLiteralType>>(),
);
