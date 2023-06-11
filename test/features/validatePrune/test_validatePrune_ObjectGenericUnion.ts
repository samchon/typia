import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validatePrune_ObjectGenericUnion = _test_validatePrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validatePrune(input),
    ObjectGenericUnion.SPOILERS,
);
