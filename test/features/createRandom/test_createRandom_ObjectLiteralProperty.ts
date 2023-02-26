import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectLiteralProperty = _test_random(
    "ObjectLiteralProperty",
    typia.createRandom<ObjectLiteralProperty>(),
    typia.createAssert<ObjectLiteralProperty>(),
);
