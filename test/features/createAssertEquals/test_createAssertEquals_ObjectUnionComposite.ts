import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectUnionComposite = _test_assertEquals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertEquals<ObjectUnionComposite>(),
);
