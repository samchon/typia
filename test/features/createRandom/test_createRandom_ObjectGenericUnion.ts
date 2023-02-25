import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectGenericUnion = _test_random(
    "ObjectGenericUnion",
    typia.createRandom<ObjectGenericUnion>(),
    typia.createAssert<typia.Primitive<ObjectGenericUnion>>(),
);
