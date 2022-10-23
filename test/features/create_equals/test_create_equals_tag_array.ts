import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagArray } from "../../structures/TagArray";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_tag_array = _test_equals(
    "array tag",
    TagArray.generate,
    TSON.createEquals<TagArray>(),
);
