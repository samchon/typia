import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_prune_ObjectGenericArray = _test_prune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.prune<ObjectGenericArray>(input),
);
