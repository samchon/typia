import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_equals_TagArrayUnion = _test_equals(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)(typia.createEquals<TagArrayUnion>());
