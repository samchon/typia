import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_random_ObjectPropertyNullable = _test_random(
    "ObjectPropertyNullable",
    typia.createRandom<ObjectPropertyNullable>(),
    typia.createAssert<typia.Primitive<ObjectPropertyNullable>>(),
);
