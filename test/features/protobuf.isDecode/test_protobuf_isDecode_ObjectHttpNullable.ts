import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_isDecode_ObjectHttpNullable =
    _test_protobuf_isDecode("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )({
        isDecode: (input) => typia.protobuf.isDecode<ObjectHttpNullable>(input),
        encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
    });
