import { TestValidator } from "@nestia/e2e";
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
    TestValidator.equals(
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
    TestValidator.equals(
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
    TestValidator.equals(
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
    TestValidator.equals(
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
