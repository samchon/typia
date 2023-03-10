import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createIsClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsClone<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
