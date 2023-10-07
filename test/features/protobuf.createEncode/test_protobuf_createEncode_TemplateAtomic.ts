import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createEncode_TemplateAtomic = _test_protobuf_encode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    encode: typia.protobuf.createEncode<TemplateAtomic>(),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
});
