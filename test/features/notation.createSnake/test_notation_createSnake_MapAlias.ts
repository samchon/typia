import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_createValidateSnake_MapAlias =
    _test_notation_validateGeneral("MapAlias")<MapAlias>(
        MapAlias
    )<typia.SnakeCase<MapAlias>>({
        convert: (input) => typia.notations.validateSnake<MapAlias>(input),
        assert: typia.createAssert<typia.SnakeCase<MapAlias>>(),
    });
