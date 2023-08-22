import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_assertDecode_ObjectSimpleProtobuf =
    _test_protobuf_assertDecode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        assertDecode: typia.protobuf.createAssertDecode<ObjectSimpleProtobuf>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
    });
