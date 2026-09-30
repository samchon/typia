import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies function schemas retain the selected signature's argument omission.
 *
 * A default narrows the variable inside the function without requiring callers
 * to supply it. Likewise, optional any/unknown parameters carry an omission
 * decision that their value type alone cannot represent.
 *
 * 1. Generate both JSON dialects and both reflection forms from the same class.
 * 2. Compare optional/default spellings with required neighbors and public
 *    overload/contextual signatures, including an explicit receiver.
 * 3. Reverse shared object-type visitation and execute legal omitted calls.
 *
 * @evidence contracts/testing.md#behavioral-verification JSON applications and reflection must distinguish omitted arguments from required neighbors; direct calls confirm default execution without using emitted schemas as their oracle.
 * @evidence contracts/testing.md#independent-expectations Literal required flags follow the selected TypeScript signature: question tokens and initializers permit omission, while a required public overload or contextual signature remains required despite its implementation default.
 * @evidence contracts/testing.md#distinguishing-cases Inferred and explicit defaults, object and binding-pattern defaults, nontrailing defaults, arrows, nullable and any/unknown values, concrete inherited generics, receivers, overloads and contextual signatures have adjacent required controls. Both object visitation orders protect shared metadata; rest argument packing is owned by functional_parameter_spellings.
 * @evidence contracts/testing.md#execution-ownership The schema workspace discovers this exported case through DynamicExecutor and the shared ttsx project. All schema assertions require the native TypeScript signature producer; they are not portable converter assertions.
 * @evidence contracts/e2e.md#necessary-boundary The native checker must connect the selected declaration's omission syntax with emitted JSON/reflection metadata. A manually authored metadata object cannot detect a lost initializer or a wrong overload declaration.
 * @evidence contracts/e2e.md#shared-execution Both dialects and reflection forms run in the existing schema project and reuse its content-keyed native artifact; no separate compiler or host is started per spelling.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Local fixture classes are immutable; default and required parameters deliberately share checker types within each analysis. A reversed class checks order dependence without clearing shared artifact caches.
 * @evidence contracts/e2e.md#preserved-coverage This case adds signature-producer coverage rather than moving portable semantics into E2E. Existing functional wrapper omission/rejection assertions remain in functional_parameter_spellings.
 */
export const test_json_application_parameter_omission = (): void => {
  interface IPayload {
    value: number;
  }
  class Generic<T extends number> {
    generic(value: T = 1 as T): T {
      return value;
    }
    requiredGeneric(value: T): T {
      return value;
    }
  }
  class Controller extends Generic<number> {
    inferred(value = 1): number {
      return value;
    }
    explicit(value: number = 1): number {
      return value;
    }
    required(value: number): number {
      return value;
    }
    optional(value?: number): number | undefined {
      return value;
    }
    object(value: IPayload = { value: 1 }): IPayload {
      return value;
    }
    requiredObject(value: IPayload): IPayload {
      return value;
    }
    pattern({ value }: IPayload = { value: 1 }): number {
      return value;
    }
    nonTrailing(value: number = 1, text: string): number {
      return value + text.length;
    }
    receiver(this: Controller, value: number = 1, text: string): number {
      return value + text.length;
    }
    arrow = (value: number = 1): number => value;
    nullable(value: number | null = null): number | null {
      return value;
    }
    anyDefault(value: any = 1): void {
      void value;
    }
    unknownDefault(value: unknown = 1): void {
      void value;
    }
    anyOptional(value?: any): void {
      void value;
    }
    unknownOptional(value?: unknown): void {
      void value;
    }
    anyRequired(value: any): void {
      void value;
    }
    unknownRequired(value: unknown): void {
      void value;
    }
    overloaded(value: number): number;
    overloaded(value: number = 1): number {
      return value;
    }
    contextRequired: (value: number) => number = (value = 1) => value;
    contextOptional: (value?: number) => number = (value = 1) => value;
  }
  class Reversed {
    required(value: IPayload): IPayload {
      return value;
    }
    defaulted(value: IPayload = { value: 1 }): IPayload {
      return value;
    }
  }
  const expected: Record<string, boolean[]> = {
    generic: [false],
    requiredGeneric: [true],
    inferred: [false],
    explicit: [false],
    required: [true],
    optional: [false],
    object: [false],
    requiredObject: [true],
    pattern: [false],
    nonTrailing: [false, true],
    receiver: [false, true],
    arrow: [false],
    nullable: [false],
    anyDefault: [false],
    unknownDefault: [false],
    anyOptional: [false],
    unknownOptional: [false],
    anyRequired: [true],
    unknownRequired: [true],
    overloaded: [true],
    contextRequired: [true],
    contextOptional: [false],
  };
  const applications = [
    typia.json.application<Controller>(),
    typia.json.application<Controller, "3.0">(),
  ];
  for (const app of applications)
    for (const [name, flags] of Object.entries(expected))
      TestEquality.equals(
        `${app.version} ${name}`,
        app.functions
          .find((fn) => fn.name === name)
          ?.parameters.map((p) => p.required),
        flags,
      );
  const single = typia.reflect.schema<Controller>();
  const collection = typia.reflect.schemas<[Controller]>();
  for (const [label, schema, components] of [
    ["single", single.schema, single.components],
    ["collection", collection.schemas[0]!, collection.components],
  ] as const) {
    const object = components.objects.find(
      (o) => o.name === schema.objects[0]?.name,
    );
    for (const [name, flags] of Object.entries(expected)) {
      const fn = object?.properties.find(
        (p) => p.key.constants[0]?.values[0]?.value === name,
      )?.value.functions[0];
      TestEquality.equals(
        `${label} ${name}`,
        fn?.parameters.map((p) => p.type.required && !p.type.optional),
        flags,
      );
    }
  }
  const reversed = typia.json.application<Reversed>();
  TestEquality.equals(
    "reversed required",
    reversed.functions.find((f) => f.name === "required")?.parameters[0]
      ?.required,
    true,
  );
  TestEquality.equals(
    "reversed default",
    reversed.functions.find((f) => f.name === "defaulted")?.parameters[0]
      ?.required,
    false,
  );
  const direct = new Controller();
  TestEquality.equals("default number", direct.explicit(), 1);
  TestEquality.equals("default object", direct.object(), { value: 1 });
  TestEquality.equals("default pattern", direct.pattern(), 1);
  TestEquality.equals(
    "nontrailing undefined",
    direct.nonTrailing(undefined, "x"),
    2,
  );
  TestEquality.equals("receiver undefined", direct.receiver(undefined, "x"), 2);
  TestEquality.equals("default arrow", direct.arrow(), 1);
};
