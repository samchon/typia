import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_validatePascal_ArraySimpleProtobuf =
    _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )<typia.PascalCase<ArraySimpleProtobuf>>({
        convert: (input) =>
            typia.notations.validatePascal<ArraySimpleProtobuf>(input),
        assert: typia.createAssert<typia.PascalCase<ArraySimpleProtobuf>>(),
    });
