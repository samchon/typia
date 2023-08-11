import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagDefault } from "../../structures/TagDefault";

export const test_equals_TagDefault = _test_equals<TagDefault>(TagDefault)(
    (input) => typia.equals<TagDefault>(input),
);
