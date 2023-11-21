import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createIsDecode_TemplateUnion =
  _test_protobuf_isDecode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
    decode: (input) => typia.protobuf.isDecode<TemplateUnion>(input),
    encode: typia.protobuf.createEncode<TemplateUnion>(),
  });
