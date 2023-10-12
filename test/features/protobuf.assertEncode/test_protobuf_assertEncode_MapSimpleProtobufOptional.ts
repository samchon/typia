import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createAssertEncode_MapSimpleProtobufOptional =
    _test_protobuf_assertEncode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        encode: (input) =>
            typia.protobuf.assertEncode<MapSimpleProtobufOptional>(input),
        decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
        message: typia.protobuf.message<MapSimpleProtobufOptional>(),
    });
