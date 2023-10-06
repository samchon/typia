import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_validatePascal_MapAlias =
    _test_notation_validateGeneral("MapAlias")<MapAlias>(
        MapAlias
    )<typia.PascalCase<MapAlias>>({
        convert: typia.notations.createValidatePascal<MapAlias>(),
        assert: typia.createAssert<typia.PascalCase<MapAlias>>(),
    });
