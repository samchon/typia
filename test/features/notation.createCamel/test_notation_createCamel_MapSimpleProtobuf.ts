import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_createValidateCamel_MapSimpleProtobuf =
    _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )<typia.CamelCase<MapSimpleProtobuf>>({
        convert: typia.notations.createValidateCamel<MapSimpleProtobuf>(),
        assert: typia.createAssert<typia.CamelCase<MapSimpleProtobuf>>(),
    });
