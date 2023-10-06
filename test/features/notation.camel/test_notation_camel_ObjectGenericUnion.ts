import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_validateCamel_ObjectGenericUnion =
    _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion
    )<typia.CamelCase<ObjectGenericUnion>>({
        convert: typia.notations.createValidateCamel<ObjectGenericUnion>(),
        assert: typia.createAssert<typia.CamelCase<ObjectGenericUnion>>(),
    });
