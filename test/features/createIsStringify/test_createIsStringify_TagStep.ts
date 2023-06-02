import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagStep } from "../../structures/TagStep";

export const test_createIsStringify_TagStep = _test_isStringify(
    "TagStep",
    TagStep.generate,
    typia.createIsStringify<TagStep>(),
    TagStep.SPOILERS,
);
