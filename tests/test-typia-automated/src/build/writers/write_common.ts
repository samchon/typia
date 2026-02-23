import { NamingConvention, dedent } from "@typia/utils";

export const write_common =
  (p: IProps) => (create: boolean) => (structure: string) =>
    dedent`
      import { ${structure} } from "@typia/template";
      import typia from "typia";

      import { _${file({
        ...p,
        method: p.method.startsWith("create")
          ? NamingConvention.localize(p.method.replace("create", ""))
          : p.method,
      })} } from "../../internal/_${file({
        ...p,
        method: p.method.startsWith("create")
          ? NamingConvention.localize(p.method.replace("create", ""))
          : p.method,
      })}";

      export const ${file(p)}_${structure} = (): void => _${file({
        ...p,
        method: p.method.startsWith("create")
          ? NamingConvention.localize(p.method.replace("create", ""))
          : p.method,
      })}(
          "${structure}",
      )<${structure}>(
          ${structure}
      )(${functor(p)(create)(structure)});
    `;

const file = (p: IProps) =>
  "test_" + (p.prefix ? `${p.prefix}_` : "") + method(p).replace(".", "_");
const method = (p: IProps) =>
  [p.module, p.method].filter((str) => !!str).join(".");
const functor = (p: IProps) => (create: boolean) => (structure: string) =>
  create
    ? `typia.${method(p)}<${structure}>()`
    : `(input) => typia.${method(p)}<${structure}>(input)`;

interface IProps {
  module: string | null;
  prefix?: string | undefined;
  method: string;
}
