import { NamingConvention } from "@typia/utils";

import { write_protobuf_decode } from "./writers/write_protobuf_decode";
import { write_protobuf_encode } from "./writers/write_protobuf_encode";
import { write_random } from "./writers/write_random";

/**
 * Describes one operation's direct/factory generation and fixture eligibility.
 *
 * Capability flags belong to the fixture-selection controller; programmer
 * overrides only rendering. asynchronous preserves a helper's rejected
 * promise.
 *
 * @evidence contracts/testing.md#behavioral-verification This descriptor type defines available invocation forms, fixture eligibility and renderer/promise binding; it executes no assertion. The controller, generated helper and direct_factory_matrix respectively own enrollment, runtime verdict and direct/factory population checks.
 * @evidence contracts/testing.md#independent-expectations DATA's authored flags establish supported generation forms before native calls execute. The type stores no expected product result; supplied helpers retain their independent fixture/reference or disclosed correlated oracle.
 * @evidence contracts/testing.md#distinguishing-cases createOnly skips an unsupported direct form and creatable adds a supported factory form. Optional programmer changes source rendering, and asynchronous preserves rejected helper promises. Disabled public families receive no implicit execution credit.
 * @evidence contracts/testing.md#execution-ownership TestAutomationController.iterate consumes DATA and passes each descriptor to its source writer. Generated named exports then execute via TestServant; the descriptor itself is checked as TypeScript input, not registered as a runtime case.
 */
export interface TestAutomationTemplate {
  module: string | null;
  prefix?: string;
  method: string;
  creatable: boolean;
  createOnly?: boolean;
  spoilable: boolean;
  formData?: boolean;
  custom?: true;
  query?: true;
  headers?: true;
  jsonable?: true;
  primitive?: true;
  resolved?: true;
  random?: true;
  strict?: true;
  explicit?: true;
  dynamic?: false;
  /**
   * Whether the `_test_*` internal returns a promise the case must be awaited
   * on. The generated function then declares `Promise<void>` so that a rejected
   * oracle reaches `DynamicExecutor` instead of becoming an unhandled
   * rejection.
   */
  asynchronous?: true;
  /**
   * Overrides source rendering for the operation's binding form and fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification This optional function signature supplies a source renderer for random/protobuf bindings; it performs no callback assertion. The returned matching export reaches the operation-specific helper at runtime.
   * @evidence contracts/testing.md#independent-expectations create and structure are authored invocation-form/fixture inputs. Rendering computes no expected native output; operation helpers own fixture/reference expectations and disclose correlated companion checks.
   * @evidence contracts/testing.md#distinguishing-cases An absent programmer selects write_common; present programmers preserve their direct/factory choice and supplied fixture identity. Fixture eligibility remains with the controller rather than being bypassed by a renderer.
   * @evidence contracts/testing.md#execution-ownership TestAutomationController.writeScript invokes the selected programmer after eligibility. The signature itself has no independently discoverable runtime registration; its generated cases retain matching named exports.
   */
  programmer?: (create: boolean) => (structure: string) => string;
}
/**
 * Owns active operation descriptors and their direct/factory family names.
 *
 * @evidence contracts/testing.md#behavioral-verification method and directory provide names used by generation and its explicit enrollment regression. They supply no callback verdict; generated helpers own product assertions.
 * @evidence contracts/testing.md#independent-expectations Authored descriptors select actual public API forms. Generation and its backstop share these naming helpers, so their agreement alone cannot independently establish every public spelling; runtime compilation/callback execution supplies the binding check.
 * @evidence contracts/testing.md#distinguishing-cases DATA distinguishes configured direct/factory and create-only families, custom-error suffixes and specialized programmer/async forms. Only active descriptors participate; commented-out families provide no coverage.
 * @evidence contracts/testing.md#execution-ownership The controller uses DATA/method/directory, test_direct_factory_matrix uses DATA/directory after generation, and named generated exports execute the resulting calls through TestServant.
 */
export namespace TestAutomationTemplate {
  /**
   * Returns the public method for the direct or factory half.
   *
   * @evidence contracts/testing.md#behavioral-verification The naming helper returns the direct method or create-prefixed capitalized factory name without running an assertion. Compilation and execution of the generated actual call establish its usable native binding.
   * @evidence contracts/testing.md#independent-expectations The configured public method and typia's createX API convention determine the name; the enrollment regression shares this helper and therefore is not an independent spelling oracle.
   * @evidence contracts/testing.md#distinguishing-cases create false preserves the authored method and true applies the factory naming convention. createOnly/creatable eligibility is decided by the controller, not silently enforced here.
   * @evidence contracts/testing.md#execution-ownership The controller and directory helper call method. No independently registered case invokes it to certify product behavior; its output appears in actual generated direct/factory call sites.
   */
  export const method = (
    tpl: TestAutomationTemplate,
    create: boolean,
  ): string =>
    create ? `create${NamingConvention.capitalize(tpl.method)}` : tpl.method;

  /**
   * The `src/features` directory that half of a template generates into.
   *
   * The direct/factory matrix backstop reads the same composition, so a renamed
   * family cannot leave the backstop asserting against a stale name.
   *
   * @evidence contracts/testing.md#behavioral-verification directory composes the generated family's prefix/module/method/custom identity. test_direct_factory_matrix requires distinct and present direct/factory families, supported create-only enrollment and fixture parity; actual callback behavior remains with each generated case.
   * @evidence contracts/testing.md#independent-expectations Descriptor capabilities establish required forms before generation. The regression shares directory composition, so it detects missing/overlapping populations but cannot independently verify the helper's spelling against every public API.
   * @evidence contracts/testing.md#distinguishing-cases Optional prefix/module and custom suffix remain separate components; method supplies the direct/factory difference. Empty optional components do not introduce separators, and Standard Schema contributes its configured prefix/factory-only family.
   * @evidence contracts/testing.md#execution-ownership The controller uses directory for output locations/export names and test_direct_factory_matrix reuses it for completed-population checks. Its internal pure method callback owns no test registration.
   */
  export const directory = (
    tpl: TestAutomationTemplate,
    create: boolean,
  ): string =>
    [
      tpl.prefix ? `${tpl.prefix}.` : "",
      tpl.module ? `${tpl.module}.` : "",
      method(tpl, create),
      tpl.custom === true ? "Custom" : "",
    ].join("");

  export const DATA: TestAutomationTemplate[] = [
    {
      module: null,
      method: "is",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "assert",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "assertGuard",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "validate",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      prefix: "standardSchema",
      method: "validate",
      creatable: false,
      createOnly: true,
      spoilable: true,
    },

    {
      module: null,
      method: "equals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "assertEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "assertGuardEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "validateEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },

    {
      module: null,
      method: "random",
      creatable: true,
      spoilable: false,
      resolved: true,
      random: true,
      programmer: write_random,
    },

    {
      module: "protobuf",
      method: "encode",
      creatable: true,
      spoilable: false,
      resolved: true,
      programmer: write_protobuf_encode("encode"),
    },
    {
      module: "protobuf",
      method: "decode",
      creatable: true,
      spoilable: false,
      resolved: true,
      programmer: write_protobuf_decode("decode"),
    },

    {
      module: "json",
      method: "stringify",
      creatable: true,
      spoilable: false,
      jsonable: true,
    },

    {
      module: "http",
      method: "formData",
      creatable: true,
      formData: true,
      resolved: true,
      spoilable: false,
      asynchronous: true,
    },
    {
      module: "http",
      method: "query",
      creatable: true,
      query: true,
      resolved: true,
      spoilable: false,
    },
    {
      module: "http",
      method: "headers",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: false,
    },
    {
      module: "http",
      method: "assertHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "isHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "validateHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },

    {
      module: "plain",
      method: "clone",
      creatable: true,
      spoilable: false,
      jsonable: true,
      resolved: true,
    },
    {
      module: "plain",
      method: "prune",
      creatable: true,
      spoilable: false,
      strict: true,
      resolved: true,
    },
  ];
}
