import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_validateDecode_ObjectPrimitive =
    _test_protobuf_validateDecode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectPrimitive>(input),
        encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    });
