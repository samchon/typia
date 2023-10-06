import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_createValidatePascal_ObjectSimpleProtobufOptional =
    _test_notation_validateGeneral(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
        typia.PascalCase<ObjectSimpleProtobufOptional>
    >({
        convert:
            typia.notations.createValidatePascal<ObjectSimpleProtobufOptional>(),
        assert: typia.createAssert<
            typia.PascalCase<ObjectSimpleProtobufOptional>
        >(),
    });
