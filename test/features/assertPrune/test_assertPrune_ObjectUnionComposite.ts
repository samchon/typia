import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertPrune_ObjectUnionComposite = _test_assertPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.assertPrune(input),
    ObjectUnionComposite.SPOILERS,
);
