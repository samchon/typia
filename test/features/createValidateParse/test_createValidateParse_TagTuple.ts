import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagTuple = _test_validateParse(
    "TagTuple",
    TagTuple.generate,
    TSON.createValidateParse<TagTuple>(),
    TagTuple.SPOILERS,
);
