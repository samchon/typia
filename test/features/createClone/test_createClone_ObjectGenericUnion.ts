import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectGenericUnion = _test_clone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createClone<ObjectGenericUnion>(),
);
