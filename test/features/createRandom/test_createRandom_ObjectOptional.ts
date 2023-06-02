import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createRandom_ObjectOptional = _test_random(
    "ObjectOptional",
    typia.createRandom<ObjectOptional>(),
    typia.createAssert<typia.Primitive<ObjectOptional>>(),
);
