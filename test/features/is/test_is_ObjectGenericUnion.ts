import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_is_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.is(input),
    ObjectGenericUnion.SPOILERS,
);
