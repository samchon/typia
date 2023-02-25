import typia from "../../../src";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectNullable = _test_isParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.isParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
