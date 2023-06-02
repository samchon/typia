import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionComposite = _test_assertClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertClone<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
