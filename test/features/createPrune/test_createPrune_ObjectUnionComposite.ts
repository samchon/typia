import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createPrune_ObjectUnionComposite = _test_prune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createPrune<ObjectUnionComposite>(),
);
