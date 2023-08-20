import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_validatePrune_TagFormat = _test_validatePrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validatePrune<TagFormat>(input),
    TagFormat.SPOILERS,
);
