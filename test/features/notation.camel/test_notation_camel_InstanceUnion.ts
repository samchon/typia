import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_validateCamel_InstanceUnion =
    _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(
        InstanceUnion
    )<typia.CamelCase<InstanceUnion>>({
        convert: typia.notations.createValidateCamel<InstanceUnion>(),
        assert: typia.createAssert<typia.CamelCase<InstanceUnion>>(),
    });
