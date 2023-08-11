import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagDefault } from "../../structures/TagDefault";

export const test_validate_TagDefault = _test_validate<TagDefault>(TagDefault)(
    (input) => typia.validate<TagDefault>(input),
);
