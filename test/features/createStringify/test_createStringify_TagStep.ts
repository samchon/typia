import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagStep } from "../../structures/TagStep";

export const test_createStringify_TagStep = _test_stringify(
    "TagStep",
    TagStep.generate,
    typia.createStringify<TagStep>(),
);
