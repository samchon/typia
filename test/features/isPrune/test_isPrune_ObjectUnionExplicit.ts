import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUnionExplicit = _test_isPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.isPrune(input),
    ObjectUnionExplicit.SPOILERS,
);
