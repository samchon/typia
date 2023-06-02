import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createRandom_ObjectDynamic = _test_random(
    "ObjectDynamic",
    typia.createRandom<ObjectDynamic>(),
    typia.createAssert<typia.Primitive<ObjectDynamic>>(),
);
