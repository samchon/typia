import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createValidateEncode_ObjectHttpConstant =
    _test_protobuf_validateEncode("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectHttpConstant>(),
        message: typia.protobuf.message<ObjectHttpConstant>(),
        decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    });
