import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_createValidatePascal_TypeTagArrayUnion =
    _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion,
    )<typia.PascalCase<TypeTagArrayUnion>>({
        convert: typia.notations.createValidatePascal<TypeTagArrayUnion>(),
        assert: typia.createAssert<typia.PascalCase<TypeTagArrayUnion>>(),
    });
