import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createRandom_ObjectIntersection = _test_random(
    "ObjectIntersection",
    typia.createRandom<ObjectIntersection>(),
    typia.createAssert<ObjectIntersection>(),
);
