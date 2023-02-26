import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidatePrune_ObjectUnionDouble = _test_validatePrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidatePrune<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
