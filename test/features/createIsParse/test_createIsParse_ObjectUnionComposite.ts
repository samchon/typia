import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createIsParse_ObjectUnionComposite = _test_isParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsParse<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
