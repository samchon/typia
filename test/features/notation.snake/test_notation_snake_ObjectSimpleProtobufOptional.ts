import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_validateSnake_ObjectSimpleProtobufOptional =
    _test_notation_validateGeneral(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
        typia.SnakeCase<ObjectSimpleProtobufOptional>
    >({
        convert: (input) =>
            typia.notations.validateSnake<ObjectSimpleProtobufOptional>(input),
        assert: typia.createAssert<
            typia.SnakeCase<ObjectSimpleProtobufOptional>
        >(),
    });
