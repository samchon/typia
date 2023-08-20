import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_prune_ObjectUnionImplicit = _test_prune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.prune<ObjectUnionImplicit>(input),
);
