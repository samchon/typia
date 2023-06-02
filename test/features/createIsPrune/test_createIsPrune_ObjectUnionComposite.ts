import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createIsPrune_ObjectUnionComposite = _test_isPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsPrune<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
