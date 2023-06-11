import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ObjectUnionComposite = _test_equals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.equals(input),
);
