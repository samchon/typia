import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUnionComposite = _test_assertParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.assertParse<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
