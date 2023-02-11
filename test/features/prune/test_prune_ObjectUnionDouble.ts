import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectUnionDouble = _test_prune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.prune(input),
);