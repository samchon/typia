import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagTuple } from "../../structures/TagTuple";

export const test_validate_TagTuple = _test_validate<TagTuple>(TagTuple)(
    (input) => typia.validate(input),
);
