import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_validateEncode_ObjectSimpleProtobuf =
    _test_protobuf_validateEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectSimpleProtobuf>(input),
        message: typia.protobuf.message<ObjectSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    });
