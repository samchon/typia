import typia from "typia";

type UnderscoreRecord = Record<string, { inner_key: string }>;
type CamelRecord = Record<string, { innerValue: string }>;
type NumericRecord = Record<number, { innerValue: string }>;
type TemplateRecord = Record<`item_${string}`, { inner_key: string }>;
interface SnakeLiteral {
  __proto__: { innerValue: string };
}
interface CamelMixed {
  user_id: { inner_key: string };
  [key: string]: { inner_key: string };
}

const snakeLiteral = (input: SnakeLiteral) =>
  typia.notations.snake<SnakeLiteral>(input);
const mixedCamel = (input: CamelMixed) =>
  typia.notations.camel<CamelMixed>(input);
const numericSnake = (input: NumericRecord) =>
  typia.notations.snake<NumericRecord>(input);
const templateCamel = (input: TemplateRecord) =>
  typia.notations.camel<TemplateRecord>(input);

const camel = {
  direct: (input: UnderscoreRecord) =>
    typia.notations.camel<UnderscoreRecord>(input),
  create: typia.notations.createCamel<UnderscoreRecord>(),
  assert: (input: unknown) =>
    typia.notations.assertCamel<UnderscoreRecord>(input),
  createAssert: typia.notations.createAssertCamel<UnderscoreRecord>(),
  is: (input: unknown) => typia.notations.isCamel<UnderscoreRecord>(input),
  createIs: typia.notations.createIsCamel<UnderscoreRecord>(),
  validate: (input: unknown) =>
    typia.notations.validateCamel<UnderscoreRecord>(input),
  createValidate: typia.notations.createValidateCamel<UnderscoreRecord>(),
};
const pascal = {
  direct: (input: UnderscoreRecord) =>
    typia.notations.pascal<UnderscoreRecord>(input),
  create: typia.notations.createPascal<UnderscoreRecord>(),
  assert: (input: unknown) =>
    typia.notations.assertPascal<UnderscoreRecord>(input),
  createAssert: typia.notations.createAssertPascal<UnderscoreRecord>(),
  is: (input: unknown) => typia.notations.isPascal<UnderscoreRecord>(input),
  createIs: typia.notations.createIsPascal<UnderscoreRecord>(),
  validate: (input: unknown) =>
    typia.notations.validatePascal<UnderscoreRecord>(input),
  createValidate: typia.notations.createValidatePascal<UnderscoreRecord>(),
};
const snake = {
  direct: (input: CamelRecord) => typia.notations.snake<CamelRecord>(input),
  create: typia.notations.createSnake<CamelRecord>(),
  assert: (input: unknown) => typia.notations.assertSnake<CamelRecord>(input),
  createAssert: typia.notations.createAssertSnake<CamelRecord>(),
  is: (input: unknown) => typia.notations.isSnake<CamelRecord>(input),
  createIs: typia.notations.createIsSnake<CamelRecord>(),
  validate: (input: unknown) =>
    typia.notations.validateSnake<CamelRecord>(input),
  createValidate: typia.notations.createValidateSnake<CamelRecord>(),
};
const kebab = {
  direct: (input: CamelRecord) => typia.notations.kebab<CamelRecord>(input),
  create: typia.notations.createKebab<CamelRecord>(),
  assert: (input: unknown) => typia.notations.assertKebab<CamelRecord>(input),
  createAssert: typia.notations.createAssertKebab<CamelRecord>(),
  is: (input: unknown) => typia.notations.isKebab<CamelRecord>(input),
  createIs: typia.notations.createIsKebab<CamelRecord>(),
  validate: (input: unknown) =>
    typia.notations.validateKebab<CamelRecord>(input),
  createValidate: typia.notations.createValidateKebab<CamelRecord>(),
};
const fixture = {
  snakeLiteral,
  mixedCamel,
  numericSnake,
  templateCamel,
  camel,
  pascal,
  snake,
  kebab,
};

/**
 * Verifies notation dynamic keys in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original notationDynamicKeysSource
 * declarations; the former notationDynamicKeysRuntimeRunner observations
 * execute in the existing automated worker. This detects a generated program
 * whose output compiles but changes these runtime decisions: the literal
 * runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from notationDynamicKeysRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored literal names determine outer and nested key presence and counts; leaf values are not inspected. Dynamic/template/numeric keys, __proto__ ownership and destination-collision exceptions establish independent cases across every family. Collision diagnostics must include quoted source/destination names; malformed-value rejection and error identity are not asserted.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_notation_dynamic_keys in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed notationDynamicKeysSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/notation_dynamic_keys_transform_test.go notationDynamicKeysRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_notation_dynamic_keys = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const literalMagic: any = mod.snakeLiteral(
    Object.fromEntries([["__proto__", { innerValue: "literal" }]]),
  );
  if (
    Object.getPrototypeOf(literalMagic) !== Object.prototype ||
    !Object.hasOwn(literalMagic, "__proto__") ||
    !Object.hasOwn(literalMagic.__proto__, "inner_value")
  ) {
    throw new Error(
      "snake literal __proto__ was not emitted as an own data property",
    );
  }

  let mixedCollision: any = null;
  try {
    mod.mixedCamel({
      user_id: { inner_key: "literal" },
      userId: { inner_key: "dynamic" },
    });
  } catch (error: any) {
    mixedCollision = error;
  }
  if (mixedCollision === null) {
    throw new Error(
      "camel mixed literal/dynamic destination collision was accepted",
    );
  }
  for (const key of ["user_id", "userId", "userId"]) {
    if (!String(mixedCollision.message).includes(JSON.stringify(key))) {
      throw new Error(
        "camel mixed collision omitted " + key + ": " + mixedCollision.message,
      );
    }
  }

  const numeric: any = mod.numericSnake({ 7: { innerValue: "numeric" } });
  if (
    !Object.hasOwn(numeric, "7") ||
    !Object.hasOwn(numeric[7], "inner_value")
  ) {
    throw new Error(
      "snake numeric index key disagreed with its mapped return type",
    );
  }

  const template: any = mod.templateCamel({
    item_user_id: { inner_key: "template" },
  });
  if (
    !Object.hasOwn(template, "itemUserId") ||
    !Object.hasOwn(template.itemUserId, "innerKey")
  ) {
    throw new Error("camel template-literal index key was not converted");
  }

  const families: any = [
    {
      name: "camel",
      api: mod.camel,
      valid: { user_id: { inner_key: "u" }, account_name: { inner_key: "a" } },
      expected: [
        ["userId", "innerKey"],
        ["accountName", "innerKey"],
      ],
      collision: { user_id: { inner_key: "a" }, userId: { inner_key: "b" } },
      collisionKeys: ["user_id", "userId", "userId"],
    },
    {
      name: "pascal",
      api: mod.pascal,
      valid: { user_id: { inner_key: "u" }, account_name: { inner_key: "a" } },
      expected: [
        ["UserId", "InnerKey"],
        ["AccountName", "InnerKey"],
      ],
      collision: { user_id: { inner_key: "a" }, UserId: { inner_key: "b" } },
      collisionKeys: ["user_id", "UserId", "UserId"],
    },
    {
      name: "snake",
      api: mod.snake,
      valid: Object.fromEntries([
        ["userId", { innerValue: "u" }],
        ["accountName", { innerValue: "a" }],
        ["__proto__", { innerValue: "p" }],
      ]),
      expected: [
        ["user_id", "inner_value"],
        ["account_name", "inner_value"],
        ["__proto__", "inner_value"],
      ],
      collision: { userId: { innerValue: "a" }, user_id: { innerValue: "b" } },
      collisionKeys: ["userId", "user_id", "user_id"],
    },
    {
      name: "kebab",
      api: mod.kebab,
      valid: { userId: { innerValue: "u" }, account_name: { innerValue: "a" } },
      expected: [
        ["user-id", "inner-value"],
        ["account-name", "inner-value"],
      ],
      collision: { userId: { innerValue: "a" }, user_id: { innerValue: "b" } },
      collisionKeys: ["userId", "user_id", "user-id"],
    },
  ];
  const variants: any = [
    "direct",
    "create",
    "assert",
    "createAssert",
    "is",
    "createIs",
    "validate",
    "createValidate",
  ];

  for (const family of families) {
    for (const variant of variants) {
      const raw: any = family.api[variant](family.valid);
      const converted: any =
        variant === "validate" || variant === "createValidate"
          ? raw.success === true
            ? raw.data
            : null
          : raw;
      if (converted === null) {
        throw new Error(
          family.name + "." + variant + " rejected valid dynamic input",
        );
      }
      if (Object.keys(converted).length !== family.expected.length) {
        throw new Error(
          family.name +
            "." +
            variant +
            " emitted unexpected keys: " +
            JSON.stringify(converted),
        );
      }
      for (const [outer, inner] of family.expected) {
        if (
          !Object.hasOwn(converted, outer) ||
          Object.keys(converted[outer]).length !== 1 ||
          !Object.hasOwn(converted[outer], inner)
        ) {
          throw new Error(
            family.name +
              "." +
              variant +
              " kept an unconverted key: " +
              JSON.stringify(converted),
          );
        }
      }

      let collision: any = null;
      try {
        family.api[variant](family.collision);
      } catch (error: any) {
        collision = error;
      }
      if (collision === null) {
        throw new Error(
          family.name +
            "." +
            variant +
            " silently accepted a destination collision",
        );
      }
      for (const key of family.collisionKeys) {
        if (!String(collision.message).includes(JSON.stringify(key))) {
          throw new Error(
            family.name +
              "." +
              variant +
              " collision omitted " +
              key +
              ": " +
              collision.message,
          );
        }
      }
    }
  }
};
