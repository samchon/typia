import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createClone_ObjectGenericUnion = _test_clone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createClone<ObjectGenericUnion>(),
);
