import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_validatePrune_ObjectUnionComposite = _test_validatePrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.validatePrune<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
