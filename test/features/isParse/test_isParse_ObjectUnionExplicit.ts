import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_isParse_ObjectUnionExplicit = _test_isParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.isParse<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
