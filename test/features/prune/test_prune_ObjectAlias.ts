import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectAlias = _test_prune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.prune(input),
);
