import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectUnionImplicit = _test_random(
    "ObjectUnionImplicit",
    () => typia.random<ObjectUnionImplicit>(),
typia.createAssert<typia.Primitive<ObjectUnionImplicit>>(),
);
