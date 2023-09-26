import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_assertEncode_ObjectHttpNullable =
    _test_protobuf_assertEncode("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpNullable>(input),
        message: typia.protobuf.message<ObjectHttpNullable>(),
        decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
    });
