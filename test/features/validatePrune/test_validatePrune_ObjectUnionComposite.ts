import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUnionComposite = _test_validatePrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionComposite.SPOILERS,
);