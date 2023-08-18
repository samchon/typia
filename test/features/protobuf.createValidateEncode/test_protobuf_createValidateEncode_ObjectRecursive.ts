import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_validateEncode_ObjectRecursive =
    _test_protobuf_validateEncode<ObjectRecursive>(ObjectRecursive)({
        validateEncode: typia.protobuf.createValidateEncode<ObjectRecursive>(),
        message: typia.protobuf.message<ObjectRecursive>(),
    });
