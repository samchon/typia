import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertStringify_ObjectUnionComposite = _test_assertStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.assertStringify(input),
    ObjectUnionComposite.SPOILERS,
);
