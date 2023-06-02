import typia from "../../../src";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectUnionDouble = _test_random(
    "ObjectUnionDouble",
    () => typia.random<ObjectUnionDouble>(),
typia.createAssert<typia.Primitive<ObjectUnionDouble>>(),
);
