import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_encode_TemplateAtomic = (): void => _test_protobuf_encode(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  encode: (input) => typia.protobuf.encode<TemplateAtomic>(input),
  decode: typia.protobuf.createDecode<TemplateAtomic>(),
  message: typia.protobuf.message<TemplateAtomic>(),
});
