import { StringUtil } from "../utils/StringUtil";

// import typia from "typia";
//
// import { _test_compare_equals } from "../../internal/_test_compare_equals";
// import { AtomicSimple } from "../../structures/AtomicSimple";
//
// export const test_compare_equals_AtomicSimple = _test_compare_equals(
//   "AtomicSimple",
// )<AtomicSimple>(AtomicSimple)((a, b) =>
//   typia.compare.equals<AtomicSimple>(a, b),
// );

export const write_compare =
  (p: IProps) => (create: boolean) => (structure: string) =>
    `import typia from "typia";

import { _${file({
      ...p,
      method: p.method.startsWith("create")
        ? StringUtil.localize(p.method.replace("create", ""))
        : p.method,
    })} } from "../../internal/_${file({
      ...p,
      method: p.method.startsWith("create")
        ? StringUtil.localize(p.method.replace("create", ""))
        : p.method,
    })}";
import { ${structure} } from "../../structures/${structure}";

export const ${file(p)}_${structure} = _${file({
      ...p,
      method: p.method.startsWith("create")
        ? StringUtil.localize(p.method.replace("create", ""))
        : p.method,
    })}(
    "${structure}",
)<${structure}>(
    ${structure}
)(${functor(p)(create)(structure)});
`;

const file = (p: IProps) => "test_" + method(p).replace(".", "_");
const method = (p: IProps) =>
  [p.module, p.method].filter((str) => !!str).join(".");
const functor = (p: IProps) => (create: boolean) => (structure: string) =>
  create
    ? `typia.${method(p)}<${structure}>()`
    : `(a, b) => typia.${method(p)}<${structure}>(a, b)`;

interface IProps {
  module: string | null;
  method: string;
}
