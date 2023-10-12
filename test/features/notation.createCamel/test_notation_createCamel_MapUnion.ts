import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_createValidateCamel_MapUnion =
    _test_notation_validateGeneral("MapUnion")<MapUnion>(MapUnion)<
        typia.CamelCase<MapUnion>
    >({
        convert: typia.notations.createValidateCamel<MapUnion>(),
        assert: typia.createAssert<typia.CamelCase<MapUnion>>(),
    });
