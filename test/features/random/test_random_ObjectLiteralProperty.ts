import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectLiteralProperty = _test_random(
    "ObjectLiteralProperty",
    () => typia.random<ObjectLiteralProperty>(),
    typia.createAssert<typia.Primitive<ObjectLiteralProperty>>(),
);
