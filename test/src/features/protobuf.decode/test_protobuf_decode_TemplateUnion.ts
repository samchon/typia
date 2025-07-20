import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_decode_TemplateUnion = (): void =>
  _test_protobuf_decode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
    decode: (input) => typia.protobuf.decode<TemplateUnion>(input),
    encode: typia.protobuf.createEncode<TemplateUnion>(),
  });
