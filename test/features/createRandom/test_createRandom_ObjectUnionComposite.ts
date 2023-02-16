import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectUnionComposite = _test_random(
    "ObjectUnionComposite",
    typia.createRandom<ObjectUnionComposite>(),
    typia.createAssert<typia.Primitive<ObjectUnionComposite>>(),
);
