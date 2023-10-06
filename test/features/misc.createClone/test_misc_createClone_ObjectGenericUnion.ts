import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createClone_ObjectGenericUnion = _test_misc_clone(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.misc.createClone<ObjectGenericUnion>(),
);
