import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUnionDouble = _test_validatePrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionDouble.SPOILERS,
);