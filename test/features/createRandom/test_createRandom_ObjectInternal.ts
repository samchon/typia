import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createRandom_ObjectInternal = _test_random(
    "ObjectInternal",
    typia.createRandom<ObjectInternal>(),
    typia.createAssert<ObjectInternal>(),
);
