import { StringUtil } from "../../utils/StringUtil";

export const write_protobuf_encode =
  (method: string) => (create: boolean) => (structure: string) =>
    `import typia from "typia";

import { _test_protobuf_${getMethod(method)(
      false,
    )} } from "../../internal/_test_protobuf_${getMethod(method)(false)}";
import { ${structure} } from "../../structures/${structure}";

export const ${getFile(method)(create)}_${structure} = (): void => _${getFile(
      method,
    )(false)}(
  "${structure}",
)<${structure}>(${structure})({
  encode: ${getFunctor(method)(create)(structure)},
  decode: typia.protobuf.createDecode<${structure}>(),
  message: typia.protobuf.message<${structure}>(),
});
`;

const getFile = (name: string) => (create: boolean) =>
  `test_protobuf_${getMethod(name)(create)}`;
const getMethod = (name: string) => (create: boolean) =>
  [create ? `create${StringUtil.capitalize(name)}` : name]
    .filter((str) => !!str)
    .join(".");
const getFunctor =
  (name: string) => (create: boolean) => (structure: string) =>
    create
      ? `typia.protobuf.${getMethod(name)(create)}<${structure}>()`
      : `(input) => typia.protobuf.${name}<${structure}>(input)`;
