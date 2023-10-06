import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createDecode_ObjectHttpConstant = _test_protobuf_decode(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
    decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
});
