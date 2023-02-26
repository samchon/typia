import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectOptional = _test_prune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.prune(input),
);
