import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectGenericArray = _test_assertEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assertEquals(input),
);
