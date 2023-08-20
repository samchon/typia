import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_validateEncode_ArraySimpleProtobuf =
    _test_protobuf_validateEncode<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArraySimpleProtobuf>(input),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
    });
