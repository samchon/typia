import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectDynamic = _test_random(
    "ObjectDynamic",
    () => typia.random<ObjectDynamic>(),
    typia.createAssert<typia.Primitive<ObjectDynamic>>(),
);