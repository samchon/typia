import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_createValidateSnake_MapSimpleProtobufNullable =
    _test_notation_validateGeneral("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
        MapSimpleProtobufNullable
    )<typia.SnakeCase<MapSimpleProtobufNullable>>({
        convert: (input) => typia.notations.validateSnake<MapSimpleProtobufNullable>(input),
        assert: typia.createAssert<typia.SnakeCase<MapSimpleProtobufNullable>>(),
    });
