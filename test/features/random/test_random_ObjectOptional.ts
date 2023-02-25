import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectOptional = _test_random(
    "ObjectOptional",
    () => typia.random<ObjectOptional>(),
    typia.createAssert<typia.Primitive<ObjectOptional>>(),
);
