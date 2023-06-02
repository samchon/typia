import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validatePrune_ObjectUnionDouble = _test_validatePrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionDouble.SPOILERS,
);
