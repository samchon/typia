import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_prune_ObjectUnionExplicit = _test_prune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.prune<ObjectUnionExplicit>(input),
);
