import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ObjectTuple = _test_isClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.isClone(input),
    ObjectTuple.SPOILERS,
);
