import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectNullable = _test_random(
    "ObjectNullable",
    () => typia.random<ObjectNullable>(),
    typia.createAssert<typia.Primitive<ObjectNullable>>(),
);