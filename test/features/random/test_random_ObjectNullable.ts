import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_random_ObjectNullable = _test_random(
    "ObjectNullable",
    () => typia.random<ObjectNullable>(),
    typia.createAssert<typia.Primitive<ObjectNullable>>(),
);
