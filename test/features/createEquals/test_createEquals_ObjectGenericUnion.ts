import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_ObjectGenericUnion = _test_equals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createEquals<ObjectGenericUnion>(),
);
