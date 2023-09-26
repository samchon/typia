import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_isEncode_ObjectHttpConstant =
    _test_protobuf_isEncode("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )({
        isEncode: (input) => typia.protobuf.isEncode<ObjectHttpConstant>(input),
        message: typia.protobuf.message<ObjectHttpConstant>(),
        decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    });
