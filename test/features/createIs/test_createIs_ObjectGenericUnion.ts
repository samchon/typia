import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createIs<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
