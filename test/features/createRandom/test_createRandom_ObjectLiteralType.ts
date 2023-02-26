import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectLiteralType = _test_random(
    "ObjectLiteralType",
    typia.createRandom<ObjectLiteralType>(),
    typia.createAssert<ObjectLiteralType>(),
);
