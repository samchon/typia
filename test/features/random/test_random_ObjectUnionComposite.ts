import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectUnionComposite = _test_random(
    "ObjectUnionComposite",
    () => typia.random<ObjectUnionComposite>(),
    typia.createAssert<typia.Primitive<ObjectUnionComposite>>(),
);
