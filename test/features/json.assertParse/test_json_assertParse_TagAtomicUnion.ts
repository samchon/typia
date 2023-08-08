import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_assertParse_TagAtomicUnion = _test_json_assertParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.json.assertParse<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
