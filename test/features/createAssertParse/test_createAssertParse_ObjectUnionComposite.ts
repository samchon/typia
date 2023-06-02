import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertParse_ObjectUnionComposite = _test_assertParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertParse<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
