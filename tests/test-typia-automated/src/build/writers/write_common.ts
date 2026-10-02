import { NamingConvention, dedent } from "@typia/utils";

import { write_data_contract } from "./write_data_contract";
import { write_validation_contract } from "./write_validation_contract";

/**
 * Renders an ordinary native binding with its shared assertion helper.
 *
 * Factory forms instantiate once in the case; direct forms supply a callback.
 * Async helpers return their promise so the executor can report a rejection.
 *
 * @evidence contracts/common.md#principled-implementation file and method compose the matching import/export and public operation from IProps; functor distinguishes direct callbacks from factory calls. Validator and data contract writers supply operation-specific declarations before the export, and asynchronous selects the actual return type.
 * @evidence contracts/common.md#clear-and-simple-design This writer owns the common source skeleton; private naming helpers keep imports, exported identity and callback spelling consistent. Specialized random and protobuf structures use their own active writers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Rendering keeps the real typia call and assertion helper, without emitted-output snapshots or cached verdicts. An unsupported operation would receive no meaningful contract prose from the specialized contract writers and must not be described as covered.
 * @evidence contracts/common.md#meaningful-documentation The comment explains direct/factory invocation and async rejection propagation. IProps documents the promise boundary, while generated contract comments describe actual assertions and oracle limitations.
 */
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

      ${write_validation_contract(p, structure) || write_data_contract(p, structure)}
      export const ${file(p)}_${structure} = (): ${
        p.asynchronous === true ? "Promise<void>" : "void"
      } => _${file({
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
  /**
   * Whether the internal returns a promise the generated case must hand back.
   *
   * Returning `void` from an asynchronous internal would turn a failed oracle
   * into an unhandled rejection instead of a reported test failure.
   */
  asynchronous?: boolean | undefined;
}
