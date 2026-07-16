import { TestValidator } from "@nestia/e2e";
import { StandardSchemaV1 } from "@standard-schema/spec";
import typia from "typia";

interface IValue {
  value: string;
}

/**
 * Verifies Standard Schema diagnostics are total for arbitrary unknown values.
 *
 * Validation itself accepts `unknown`, but message construction previously
 * invoked user coercion and could throw after a normal failure. The adapter
 * must return stable issues for roots and properties through both validators.
 *
 * 1. Validate symbols, null-prototype objects, cycles, and hostile proxies.
 * 2. Exercise both createValidate and createValidateEquals at root/property paths.
 * 3. Preserve readable primitive/object messages and ordinary success results.
 */
export const test_standard_schema_unknown_diagnostics = (): void => {
  const cyclic: Record<string, unknown> = { bigint: 1n };
  cyclic.self = cyclic;
  const hostile = {
    [Symbol.toPrimitive]: (): never => {
      throw new Error("coercion must not escape");
    },
    toString: (): never => {
      throw new Error("toString must not escape");
    },
    valueOf: (): never => {
      throw new Error("valueOf must not escape");
    },
  };
  const throwingProxy = new Proxy(
    {},
    {
      get: (): never => {
        throw new Error("proxy access must not escape");
      },
    },
  );
  const revocable = Proxy.revocable({}, {});
  revocable.revoke();
  const values: readonly unknown[] = [
    Symbol("symbol"),
    Object.create(null),
    cyclic,
    hostile,
    throwingProxy,
    revocable.proxy,
  ];

  const rootValidators = [
    typia.createValidate<string>(),
    typia.createValidateEquals<string>(),
  ];
  const propertyValidators = [
    typia.createValidate<IValue>(),
    typia.createValidateEquals<IValue>(),
  ];
  for (const [index, value] of values.entries()) {
    for (const validator of rootValidators)
      assertFailure(`root ${index}`, validator, value, []);
    for (const validator of propertyValidators)
      assertFailure(`property ${index}`, validator, { value }, [
        { key: "value" },
      ]);
  }

  const ordinary = rootValidators[0]!["~standard"].validate({ plain: true });
  if (ordinary instanceof Promise || ordinary.issues === undefined)
    throw new Error(
      "Expected an ordinary object to return Standard Schema issues.",
    );
  TestValidator.equals(
    "ordinary object message",
    "expected string, got [object Object]",
    ordinary.issues[0]?.message,
  );

  const success = propertyValidators[0]!["~standard"].validate({ value: "ok" });
  if (success instanceof Promise || !("value" in success))
    throw new Error(
      "Expected a valid object to return a Standard Schema value.",
    );
  TestValidator.equals("success value", { value: "ok" }, success.value);
};

const assertFailure = <T>(
  label: string,
  validator: StandardSchemaV1<T, T>,
  input: unknown,
  path: ReadonlyArray<PropertyKey | StandardSchemaV1.PathSegment>,
): void => {
  const result = validator["~standard"].validate(input);
  if (result instanceof Promise || result.issues === undefined)
    throw new Error(`Expected ${label} to return Standard Schema issues.`);
  TestValidator.equals(`${label} issue count`, 1, result.issues.length);
  TestValidator.predicate(
    `${label} message`,
    () => typeof result.issues[0]?.message === "string",
  );
  TestValidator.equals(`${label} path`, path, result.issues[0]?.path);
};
