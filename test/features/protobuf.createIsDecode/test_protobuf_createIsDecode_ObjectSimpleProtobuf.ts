import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_isDecode_ObjectSimpleProtobuf =
    _test_protobuf_isDecode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        isDecode: typia.protobuf.createIsDecode<ObjectSimpleProtobuf>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
    });
