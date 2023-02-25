import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectGenericArray = _test_prune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.prune(input),
);
