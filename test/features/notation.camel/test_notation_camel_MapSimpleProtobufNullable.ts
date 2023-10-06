import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_validateCamel_MapSimpleProtobufNullable =
    _test_notation_validateGeneral("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
        MapSimpleProtobufNullable
    )<typia.CamelCase<MapSimpleProtobufNullable>>({
        convert: typia.notations.createValidateCamel<MapSimpleProtobufNullable>(),
        assert: typia.createAssert<typia.CamelCase<MapSimpleProtobufNullable>>(),
    });
