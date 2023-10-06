import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createIsPrune_ObjectGenericUnion = _test_misc_isPrune(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.misc.createIsPrune<ObjectGenericUnion>(),
);
