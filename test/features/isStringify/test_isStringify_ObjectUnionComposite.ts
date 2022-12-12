import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionComposite = _test_isStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isStringify(input),
    ObjectUnionComposite.SPOILERS,
);