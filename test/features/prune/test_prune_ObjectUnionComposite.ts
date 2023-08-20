import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_prune_ObjectUnionComposite = _test_prune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.prune<ObjectUnionComposite>(input),
);
