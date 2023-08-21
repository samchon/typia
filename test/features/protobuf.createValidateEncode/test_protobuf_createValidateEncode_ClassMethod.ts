import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_validateEncode_ClassMethod =
    _test_protobuf_validateEncode("ClassMethod")<ClassMethod>(ClassMethod)({
        validateEncode: typia.protobuf.createValidateEncode<ClassMethod>(),
        message: typia.protobuf.message<ClassMethod>(),
    });
