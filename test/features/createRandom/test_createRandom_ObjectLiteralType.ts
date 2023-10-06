import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createRandom_ObjectLiteralType = _test_random(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
    random: typia.createRandom<ObjectLiteralType>(),
    assert: typia.createAssert<ObjectLiteralType>(),
});
