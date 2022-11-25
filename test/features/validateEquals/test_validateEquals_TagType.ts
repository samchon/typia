import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagType = _test_validateEquals(
    "TagType",
    TagType.generate,
    (input) => TSON.validateEquals(input),
);