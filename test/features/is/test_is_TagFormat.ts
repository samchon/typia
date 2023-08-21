import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagFormat } from "../../structures/TagFormat";

export const test_is_TagFormat = _test_is("TagFormat")<TagFormat>(TagFormat)(
    (input) => typia.is<TagFormat>(input),
);
