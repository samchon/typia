import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_decode_TemplateAtomic = _test_protobuf_decode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    encode: typia.protobuf.createEncode<TemplateAtomic>(),
});
