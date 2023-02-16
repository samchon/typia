import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectUnionExplicit = _test_random(
    "ObjectUnionExplicit",
    () => typia.random<ObjectUnionExplicit>(),
    typia.createAssert<typia.Primitive<ObjectUnionExplicit>>(),
);
