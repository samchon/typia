import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_prune_ObjectOptional = _test_prune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.prune(input),
);
