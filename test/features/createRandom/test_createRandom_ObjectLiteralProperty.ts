import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createRandom_ObjectLiteralProperty = _test_random(
    "ObjectLiteralProperty",
    typia.createRandom<ObjectLiteralProperty>(),
    typia.createAssert<ObjectLiteralProperty>(),
);
