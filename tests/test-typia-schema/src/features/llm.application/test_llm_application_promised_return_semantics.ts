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
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema, typia.json.application, typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 13 assertions (reflected application component exists; reflect … async; reflect … output is fulfilled; reflect … sync; reflected fake Promise output is not unwrapped; json … async). The case documents its purpose as: Verifies promised return semantics reach every metadata consumer.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Functional metadata feeds reflection, JSON Schema applications, LLM applications, and controllers. These surfaces must agree on both async classification and the fulfilled output schema instead of trusting a type's symbol spelling. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (reflected application component exists; reflect … async; reflect … output is fulfilled; reflect … sync; reflected fake Promise output is not unwrapped; json … async) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_promised_return_semantics is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
