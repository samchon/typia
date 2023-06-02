import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertParse_ObjectGenericUnion = _test_assertParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createAssertParse<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
