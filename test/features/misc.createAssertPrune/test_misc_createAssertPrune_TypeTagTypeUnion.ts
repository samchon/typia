import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_createAssertPrune_TypeTagTypeUnion =
    _test_misc_assertPrune("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )(typia.misc.createAssertPrune<TypeTagTypeUnion>());
