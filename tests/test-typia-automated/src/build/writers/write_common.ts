import { NamingConvention, dedent } from "@typia/utils";

import { write_data_contract } from "./write_data_contract";
import { write_validation_contract } from "./write_validation_contract";

/**
 * Renders an ordinary native binding with its shared assertion helper.
 *
 * Factory forms instantiate once in the case; direct forms supply a callback.
 * Async helpers return their promise so the executor can report a rejection.
 *
 * @evidence contracts/testing.md#behavioral-verification This writer emits source without asserting callback behavior. Its generated export binds the actual typed typia call to the named _test helper; that helper owns data and rejection assertions. Async output returns the helper's Promise so a rejection remains observable by the executor.
 * @evidence contracts/testing.md#independent-expectations No actual callback is executed while rendering and no expected result is computed here. Operation-specific helpers use authored fixtures and their documented independent or correlated oracle; the contract writers describe those actual distinctions.
 * @evidence contracts/testing.md#distinguishing-cases The create argument selects a factory call versus a direct callback; prefix/module/method establish family identity and asynchronous switches void to Promise<void>. Eligible descriptors and fixtures come from the controller; this writer does not certify unsupported operations or fault-test its own source skeleton.
 * @evidence contracts/testing.md#execution-ownership TestAutomationController.writeScript invokes this fallback renderer. Private file/method/functor and IProps own naming and callback text; each generated matching test export is separately discovered by TestServant during start.
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
