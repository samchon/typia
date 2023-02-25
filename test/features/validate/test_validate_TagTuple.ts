import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagTuple = _test_validate(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validate(input),
    TagTuple.SPOILERS,
);
