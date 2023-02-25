import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectUnionComposite = _test_prune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createPrune<ObjectUnionComposite>(),
);
