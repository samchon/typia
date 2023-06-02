import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertParse_ObjectUnionExplicit = _test_assertParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertParse<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
