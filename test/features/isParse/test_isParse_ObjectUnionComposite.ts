import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectUnionComposite = _test_isParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isParse<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
