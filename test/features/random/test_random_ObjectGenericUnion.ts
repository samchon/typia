import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectGenericUnion = _test_random(
    "ObjectGenericUnion",
    () => typia.random<ObjectGenericUnion>(),
    typia.createAssert<typia.Primitive<ObjectGenericUnion>>(),
);
