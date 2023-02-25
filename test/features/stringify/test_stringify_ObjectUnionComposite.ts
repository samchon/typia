import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectUnionComposite = _test_stringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.stringify(input),
);
