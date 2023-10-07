import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_validatePascal_MapSimpleProtobufOptional =
    _test_notation_validateGeneral(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
        typia.PascalCase<MapSimpleProtobufOptional>
    >({
        convert: (input) =>
            typia.notations.validatePascal<MapSimpleProtobufOptional>(input),
        assert: typia.createAssert<
            typia.PascalCase<MapSimpleProtobufOptional>
        >(),
    });
