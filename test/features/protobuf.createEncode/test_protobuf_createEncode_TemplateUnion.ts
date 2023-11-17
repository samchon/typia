import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createEncode_TemplateUnion = _test_protobuf_encode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  encode: typia.protobuf.createEncode<TemplateUnion>(),
  decode: typia.protobuf.createDecode<TemplateUnion>(),
  message: typia.protobuf.message<TemplateUnion>(),
});
