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
 * @evidence contracts/common.md#principled-implementation Module, prefix and method compose the public operation and family identity. createOnly and creatable distinguish available binding forms, while capability flags select applicable fixtures. A programmer renders specialized random or binary bindings without replacing their assertions.
 * @evidence contracts/common.md#clear-and-simple-design The interface keeps selection and rendering options in one operation descriptor; DATA is the configured population. Runtime fixture callbacks remain in TestAutomationMetadata rather than being duplicated here.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Flags describe supported operation inputs, not expected results. The currently configured population deliberately omits several public operations; ObjectSimple composites retain selected validating variants, and this descriptor does not claim exhaustive public API coverage.
 * @evidence contracts/common.md#meaningful-documentation The introduction separates selection, rendering and promise ownership. asynchronous explains why a void wrapper would hide failed async assertions; method and directory document discoverable naming.
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
   * @evidence contracts/common.md#principled-implementation The curried create and structure inputs select a direct/factory binding and exact fixture identity, returning source text for the same controller enrollment decision.
   * @evidence contracts/common.md#clear-and-simple-design One optional renderer specializes random or protobuf source skeletons without introducing another fixture selector or execution owner.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The callback produces test source, not verdicts or expected codec bytes; real native bindings and assertions remain in the generated operation-specific cases.
   * @evidence contracts/common.md#meaningful-documentation Native prose explains override responsibility and its two inputs; the interface introduction separates rendering from selection and asynchronous execution.
   */
  programmer?: (create: boolean) => (structure: string) => string;
}
/** Owns active operation descriptors and their direct/factory family names. */
export namespace TestAutomationTemplate {
  /**
   * Returns the public method for the direct or factory half.
   *
   * @evidence contracts/common.md#principled-implementation Direct forms retain tpl.method; factory forms prepend create to the capitalized method, matching typia's configured public naming convention.
   * @evidence contracts/common.md#clear-and-simple-design One pure conditional owns this name composition and is reused by directory and the controller.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No fixture identity or expected output influences the method spelling; the configured descriptor supplies the operation.
   * @evidence contracts/common.md#meaningful-documentation Native prose states the distinction between direct and factory halves; it makes no execution or output correctness claim.
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
   * @evidence contracts/common.md#principled-implementation Ordered optional prefix/module, composed method and Custom suffix preserve each configured family's discoverable directory identity, including standardSchema factory-only entries.
   * @evidence contracts/common.md#clear-and-simple-design directory calls the shared method function and joins four naming components; it does not duplicate eligibility or render source.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Naming depends only on the descriptor and binding half, never a fixture name or test verdict.
   * @evidence contracts/common.md#meaningful-documentation The comment describes src/features naming and shared composition, which is useful when renaming an operation or its factory half.
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
