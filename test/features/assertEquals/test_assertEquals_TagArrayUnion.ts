import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_assertEquals_TagArrayUnion = _test_assertEquals(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.assertEquals<TagArrayUnion>(input),
);
