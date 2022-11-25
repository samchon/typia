import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagFormat = _test_isClone(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.isClone(input),
    TagFormat.SPOILERS,
);
