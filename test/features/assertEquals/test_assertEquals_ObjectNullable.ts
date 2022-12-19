import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectNullable = _test_assertEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertEquals(input),
);