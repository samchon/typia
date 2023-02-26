import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertParse_ObjectTuple = _test_assertParse(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createAssertParse<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
