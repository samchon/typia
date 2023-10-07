import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_createValidateCamel_MapSimple =
    _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
        typia.CamelCase<MapSimple>
    >({
        convert: typia.notations.createValidateCamel<MapSimple>(),
        assert: typia.createAssert<typia.CamelCase<MapSimple>>(),
    });
