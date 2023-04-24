import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_random_ObjectSimple = _test_random(
    "ObjectSimple",
    () => typia.random<ObjectSimple>(),
    typia.createAssert<typia.Primitive<ObjectSimple>>(),
);
