import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_isStringify_ObjectUnionComposite = _test_isStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isStringify<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
