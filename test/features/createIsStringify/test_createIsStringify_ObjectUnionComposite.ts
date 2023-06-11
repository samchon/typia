import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createIsStringify_ObjectUnionComposite = _test_isStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsStringify<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
