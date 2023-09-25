import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_isEncode_ObjectHttpNullable =
    _test_protobuf_isEncode("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )({
        isEncode: (input) => typia.protobuf.isEncode<ObjectHttpNullable>(input),
        message: typia.protobuf.message<ObjectHttpNullable>(),
        decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
    });
