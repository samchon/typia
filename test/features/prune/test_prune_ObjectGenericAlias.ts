import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectGenericAlias = _test_prune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.prune(input),
);