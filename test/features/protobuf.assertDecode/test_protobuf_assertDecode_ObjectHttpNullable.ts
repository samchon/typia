import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_assertDecode_ObjectHttpNullable =
    _test_protobuf_assertDecode("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectHttpNullable>(input),
        encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
    });
