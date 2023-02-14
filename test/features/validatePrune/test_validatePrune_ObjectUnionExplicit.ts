import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUnionExplicit = _test_validatePrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionExplicit.SPOILERS,
);