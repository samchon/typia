import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectGenericUnion = _test_stringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.stringify(input),
);
