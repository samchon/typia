import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagTuple = _test_validateEquals(
    "TagTuple",
    TagTuple.generate,
    TSON.createValidateEquals<TagTuple>(),
);
