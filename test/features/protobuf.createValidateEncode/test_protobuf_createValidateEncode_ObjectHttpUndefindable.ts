import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createValidateEncode_ObjectHttpUndefindable =
    _test_protobuf_validateEncode(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectHttpUndefindable>(),
        message: typia.protobuf.message<ObjectHttpUndefindable>(),
        decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    });
