import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertEquals_ObjectTuple = _test_assertEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assertEquals(input),
);
