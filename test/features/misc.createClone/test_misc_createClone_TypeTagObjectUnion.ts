import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createClone_TypeTagObjectUnion = _test_misc_clone(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.misc.createClone<TypeTagObjectUnion>(),
);
