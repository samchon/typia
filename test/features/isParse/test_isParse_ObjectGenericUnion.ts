import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_isParse_ObjectGenericUnion = _test_isParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isParse<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
