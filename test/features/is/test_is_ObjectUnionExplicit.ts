import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionExplicit = _test_is(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.is(input),
    ObjectUnionExplicit.SPOILERS,
);