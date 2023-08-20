import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_prune_ObjectAlias = _test_prune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.prune<ObjectAlias>(input),
);
