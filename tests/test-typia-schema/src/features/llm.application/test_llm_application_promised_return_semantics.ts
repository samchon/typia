import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface IPromisedReturnInput {
  value: number;
}
interface IPromisedReturnOutput {
  total: number;
}
class PromisedReturnDerivedPromise<T> extends Promise<T> {}
interface IPromisedReturnInterfacePromise<T> extends Promise<T> {}
type PromisedReturnBrandedPromise<T> = Promise<T> & {
  readonly __brand: unique symbol;
};
namespace PromisedReturnShadow {
  export class Promise<T> {
    public constructor(public value: T) {}
  }
}
interface IPromisedReturnApplication {
  derivedClass(
    input: IPromisedReturnInput,
  ): PromisedReturnDerivedPromise<IPromisedReturnOutput>;
  derivedInterface(
    input: IPromisedReturnInput,
  ): IPromisedReturnInterfacePromise<IPromisedReturnOutput>;
  branded(
    input: IPromisedReturnInput,
  ): PromisedReturnBrandedPromise<IPromisedReturnOutput>;
  shadowed(
    input: IPromisedReturnInput,
  ): PromisedReturnShadow.Promise<IPromisedReturnOutput>;
  synchronous(input: IPromisedReturnInput): IPromisedReturnOutput;
}

/**
 * Verifies promised return semantics reach every metadata consumer.
 *
 * Functional metadata feeds reflection, JSON Schema applications, LLM
 * applications, and controllers. These surfaces must agree on both async
 * classification and the fulfilled output schema instead of trusting a type's
 * symbol spelling.
 *
 * 1. Declare derived class/interface and branded Promise return shapes.
 * 2. Contrast them with synchronous and shadowed-name controls.
 * 3. Assert reflection, JSON, LLM, and controller output parity.
 *
 * @evidence contracts/testing.md#behavioral-verification Reflection, JSON application, LLM application and controller outputs classify derived-class, derived-interface and branded genuine Promise returns as asynchronous fulfilled outputs, with shadowed-name and synchronous controls.
 * @evidence contracts/testing.md#independent-expectations Async true/false and the total/value field distinctions follow TypeScript Promise inheritance and the local fake Promise declaration. The source literals are independent, though substring checks on serialized schemas only establish the named field/text presence, not full structural equality.
 * @evidence contracts/testing.md#distinguishing-cases Three genuine Promise spellings are contrasted with two synchronous controls on reflection and JSON surfaces; fulfilled total versus fake-wrapper value is also checked on LLM/controller output. Controller executor is not invoked.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_promised_return_semantics is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.reflect.schema, typia.json.application, typia.llm.application, typia.llm.controller through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.reflect.schema, typia.json.application, typia.llm.application, typia.llm.controller call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Three genuine Promise spellings are contrasted with two synchronous controls on reflection and JSON surfaces; fulfilled total versus fake-wrapper value is also checked on LLM/controller output. Controller executor is not invoked. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_promised_return_semantics = (): void => {
  const promisedNames = [
    "derivedClass",
    "derivedInterface",
    "branded",
  ] as const;
  const unit = typia.reflect.schema<IPromisedReturnApplication>();
  const application = unit.components.objects.find(
    (object) => object.name === "IPromisedReturnApplication",
  );
  TestValidator.predicate(
    "reflected application component exists",
    () => application !== undefined,
  );
  const reflected = new Map(
    (application?.properties ?? []).map((property) => [
      property.key.constants[0]?.values[0]?.value,
      property.value.functions[0],
    ]),
  );
  for (const name of promisedNames) {
    TestEquality.equals(
      `reflect ${name} async`,
      reflected.get(name)?.async,
      true,
    );
    TestValidator.predicate(
      `reflect ${name} output is fulfilled`,
      () =>
        reflected
          .get(name)
          ?.output.objects.some(
            (object) => object.name === "IPromisedReturnOutput",
          ) === true,
    );
  }
  for (const name of ["shadowed", "synchronous"])
    TestEquality.equals(
      `reflect ${name} sync`,
      reflected.get(name)?.async,
      false,
    );
  TestValidator.predicate(
    "reflected fake Promise output is not unwrapped",
    () =>
      reflected
        .get("shadowed")
        ?.output.objects.some((object) => object.name.includes("Promise")) ===
      true,
  );

  const json = typia.json.application<IPromisedReturnApplication>();
  const jsonFunctions = new Map(json.functions.map((fn) => [fn.name, fn]));
  for (const name of promisedNames) {
    TestEquality.equals(
      `json ${name} async`,
      jsonFunctions.get(name)?.async,
      true,
    );
    TestValidator.predicate(`JSON ${name} output is fulfilled`, () =>
      JSON.stringify(jsonFunctions.get(name)?.output).includes(
        "IPromisedReturnOutput",
      ),
    );
  }
  for (const name of ["shadowed", "synchronous"])
    TestEquality.equals(
      `json ${name} sync`,
      jsonFunctions.get(name)?.async,
      false,
    );
  const shadowedSchema = jsonFunctions.get("shadowed")?.output?.schema as
    | { $ref?: string }
    | undefined;
  const shadowedComponent =
    json.components.schemas?.[shadowedSchema?.$ref?.split("/").at(-1) ?? ""];
  TestValidator.predicate("JSON fake Promise output retains value", () =>
    JSON.stringify(shadowedComponent).includes("value"),
  );

  const llm = typia.llm.application<IPromisedReturnApplication>();
  for (const name of promisedNames)
    TestValidator.predicate(`LLM ${name} output uses fulfilled schema`, () =>
      JSON.stringify(
        llm.functions.find((fn) => fn.name === name)?.output,
      ).includes("total"),
    );
  TestValidator.predicate("LLM fake Promise output retains value", () =>
    JSON.stringify(
      llm.functions.find((fn) => fn.name === "shadowed")?.output,
    ).includes("value"),
  );

  const executor = null as unknown as IPromisedReturnApplication;
  const controller = typia.llm.controller<IPromisedReturnApplication>(
    "promised-return",
    executor,
  );
  for (const name of promisedNames)
    TestValidator.predicate(
      `controller ${name} output uses fulfilled schema`,
      () =>
        JSON.stringify(
          controller.application.functions.find((fn) => fn.name === name)
            ?.output,
        ).includes("total"),
    );
  TestValidator.predicate("controller fake Promise output retains value", () =>
    JSON.stringify(
      controller.application.functions.find((fn) => fn.name === "shadowed")
        ?.output,
    ).includes("value"),
  );
};
