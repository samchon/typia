import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_validatePrune_ObjectUnionImplicit = _test_validatePrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validatePrune<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
