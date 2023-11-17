import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createDecode_TemplateUnion = _test_protobuf_decode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  decode: (input) => typia.protobuf.decode<TemplateUnion>(input),
  encode: typia.protobuf.createEncode<TemplateUnion>(),
});
