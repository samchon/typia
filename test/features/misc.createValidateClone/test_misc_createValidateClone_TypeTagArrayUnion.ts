import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_validateClone_TypeTagArrayUnion =
    _test_misc_validateClone("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion,
    )(typia.misc.createValidateClone<TypeTagArrayUnion>());
