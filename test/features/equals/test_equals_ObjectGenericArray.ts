import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectGenericArray = _test_equals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.equals(input),
);
