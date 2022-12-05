import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagFormat = _test_validateClone(
    "TagFormat",
    TagFormat.generate,
    TSON.createValidateClone<TagFormat>(),
    TagFormat.SPOILERS,
);
