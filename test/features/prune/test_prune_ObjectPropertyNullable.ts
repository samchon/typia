import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ObjectPropertyNullable = _test_prune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.prune(input),
);
