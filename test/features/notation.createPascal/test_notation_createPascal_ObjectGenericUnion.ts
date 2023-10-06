import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_createValidatePascal_ObjectGenericUnion =
    _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )<typia.PascalCase<ObjectGenericUnion>>({
        convert: typia.notations.createValidatePascal<ObjectGenericUnion>(),
        assert: typia.createAssert<typia.PascalCase<ObjectGenericUnion>>(),
    });
