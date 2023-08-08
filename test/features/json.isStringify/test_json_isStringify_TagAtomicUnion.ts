import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_isStringify_TagAtomicUnion = _test_json_isStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.json.isStringify(input),
    TagAtomicUnion.SPOILERS,
);
