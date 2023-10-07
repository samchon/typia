import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_validateSnake_MapSimpleProtobufOptional =
    _test_notation_validateGeneral(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
        typia.SnakeCase<MapSimpleProtobufOptional>
    >({
        convert: (input) =>
            typia.notations.validateSnake<MapSimpleProtobufOptional>(input),
        assert: typia.createAssert<
            typia.SnakeCase<MapSimpleProtobufOptional>
        >(),
    });
