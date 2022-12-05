import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectUnionExplicit = _test_isParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.isParse<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
