import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertParse_ObjectGenericUnion = _test_assertParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertParse<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
