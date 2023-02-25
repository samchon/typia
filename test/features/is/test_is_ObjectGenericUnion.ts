import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.is(input),
    ObjectGenericUnion.SPOILERS,
);
