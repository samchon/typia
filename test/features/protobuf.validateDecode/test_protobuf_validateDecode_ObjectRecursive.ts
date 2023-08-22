import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_validateDecode_ObjectRecursive =
    _test_protobuf_validateDecode("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectRecursive>(input),
        encode: typia.protobuf.createEncode<ObjectRecursive>(),
    });
