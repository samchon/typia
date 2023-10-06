import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_createValidateCamel_MapAlias =
    _test_notation_validateGeneral("MapAlias")<MapAlias>(
        MapAlias
    )<typia.CamelCase<MapAlias>>({
        convert: (input) => typia.notations.validateCamel<MapAlias>(input),
        assert: typia.createAssert<typia.CamelCase<MapAlias>>(),
    });
