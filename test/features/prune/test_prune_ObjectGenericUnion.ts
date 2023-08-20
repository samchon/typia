import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_prune_ObjectGenericUnion = _test_prune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.prune<ObjectGenericUnion>(input),
);
