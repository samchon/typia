import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_isEncode_ObjectHttpAtomic = _test_protobuf_isEncode(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectHttpAtomic>(input),
    message: typia.protobuf.message<ObjectHttpAtomic>(),
    decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
});
