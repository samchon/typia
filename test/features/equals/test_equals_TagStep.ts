import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagStep } from "../../structures/TagStep";

export const test_equals_TagStep = _test_equals<TagStep>(TagStep)((input) =>
    typia.equals<TagStep>(input),
);
