import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createAssertClone_TypeTagObjectUnion =
    _test_misc_assertClone("TypeTagObjectUnion")<TypeTagObjectUnion>(
        TypeTagObjectUnion,
    )(typia.misc.createAssertClone<TypeTagObjectUnion>());
