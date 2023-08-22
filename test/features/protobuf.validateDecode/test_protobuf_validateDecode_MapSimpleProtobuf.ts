import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_validateDecode_MapSimpleProtobuf =
    _test_protobuf_validateDecode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<MapSimpleProtobuf>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
    });
