import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagFormat = _test_isParse(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.isParse<TagFormat>(input),
    TagFormat.SPOILERS,
);
