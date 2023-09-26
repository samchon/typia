import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_createIsEncode_ObjectHttpNullable =
    _test_protobuf_isEncode("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectHttpNullable>(),
        message: typia.protobuf.message<ObjectHttpNullable>(),
        decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
    });
