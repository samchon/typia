import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_isParse_ObjectTuple = _test_isParse(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.isParse<ObjectTuple>(input),
    ObjectTuple.SPOILERS,
);
