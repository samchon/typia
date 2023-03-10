import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_random_ObjectGeneric = _test_random(
    "ObjectGeneric",
    () => typia.random<ObjectGeneric>(),
    typia.createAssert<ObjectGeneric>(),
);
