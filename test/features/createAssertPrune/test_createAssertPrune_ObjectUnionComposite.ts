import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertPrune_ObjectUnionComposite = _test_assertPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertPrune<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
