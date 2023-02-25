import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectPropertyNullable = _test_random(
    "ObjectPropertyNullable",
    () => typia.random<ObjectPropertyNullable>(),
    typia.createAssert<typia.Primitive<ObjectPropertyNullable>>(),
);
