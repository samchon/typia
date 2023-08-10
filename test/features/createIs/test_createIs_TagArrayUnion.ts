import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_is_TagArrayUnion = _test_is<TagArrayUnion>(TagArrayUnion)(
    typia.createIs<TagArrayUnion>(),
);
