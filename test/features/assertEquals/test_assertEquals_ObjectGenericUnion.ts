import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectGenericUnion = _test_assertEquals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertEquals(input),
);