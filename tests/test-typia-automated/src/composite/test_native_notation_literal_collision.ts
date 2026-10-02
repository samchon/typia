import typia from "typia";

interface CamelCollision {
  user_id: string;
  userId: string;
}
interface PascalCollision {
  user_id: string;
  UserId: string;
}
interface SnakeCollision {
  userId: string;
  user_id: string;
}
interface KebabCollision {
  userId: string;
  user_id: string;
}

const camel = {
  direct: (input: CamelCollision) =>
    typia.notations.camel<CamelCollision>(input),
  create: typia.notations.createCamel<CamelCollision>(),
  assert: (input: unknown) =>
    typia.notations.assertCamel<CamelCollision>(input),
  createAssert: typia.notations.createAssertCamel<CamelCollision>(),
  is: (input: unknown) => typia.notations.isCamel<CamelCollision>(input),
  createIs: typia.notations.createIsCamel<CamelCollision>(),
  validate: (input: unknown) =>
    typia.notations.validateCamel<CamelCollision>(input),
  createValidate: typia.notations.createValidateCamel<CamelCollision>(),
};
const pascal = {
  direct: (input: PascalCollision) =>
    typia.notations.pascal<PascalCollision>(input),
  create: typia.notations.createPascal<PascalCollision>(),
  assert: (input: unknown) =>
    typia.notations.assertPascal<PascalCollision>(input),
  createAssert: typia.notations.createAssertPascal<PascalCollision>(),
  is: (input: unknown) => typia.notations.isPascal<PascalCollision>(input),
  createIs: typia.notations.createIsPascal<PascalCollision>(),
  validate: (input: unknown) =>
    typia.notations.validatePascal<PascalCollision>(input),
  createValidate: typia.notations.createValidatePascal<PascalCollision>(),
};
const snake = {
  direct: (input: SnakeCollision) =>
    typia.notations.snake<SnakeCollision>(input),
  create: typia.notations.createSnake<SnakeCollision>(),
  assert: (input: unknown) =>
    typia.notations.assertSnake<SnakeCollision>(input),
  createAssert: typia.notations.createAssertSnake<SnakeCollision>(),
  is: (input: unknown) => typia.notations.isSnake<SnakeCollision>(input),
  createIs: typia.notations.createIsSnake<SnakeCollision>(),
  validate: (input: unknown) =>
    typia.notations.validateSnake<SnakeCollision>(input),
  createValidate: typia.notations.createValidateSnake<SnakeCollision>(),
};
const kebab = {
  direct: (input: KebabCollision) =>
    typia.notations.kebab<KebabCollision>(input),
  create: typia.notations.createKebab<KebabCollision>(),
  assert: (input: unknown) =>
    typia.notations.assertKebab<KebabCollision>(input),
  createAssert: typia.notations.createAssertKebab<KebabCollision>(),
  is: (input: unknown) => typia.notations.isKebab<KebabCollision>(input),
  createIs: typia.notations.createIsKebab<KebabCollision>(),
  validate: (input: unknown) =>
    typia.notations.validateKebab<KebabCollision>(input),
  createValidate: typia.notations.createValidateKebab<KebabCollision>(),
};
const fixture = { camel, pascal, snake, kebab };

/**
 * Verifies notation literal collision in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * notationLiteralCollisionSource declarations; the former
 * notationLiteralCollisionRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from notationLiteralCollisionRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Distinct authored keys map to one target spelling and must throw in all four families and eight variants. Each error must name both original keys and the target spelling; silently choosing either value fails.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_notation_literal_collision in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed notationLiteralCollisionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/notation_literal_collision_transform_test.go notationLiteralCollisionRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_notation_literal_collision = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const families: any = [
    {
      name: "camel",
      api: mod.camel,
      input: { user_id: "a", userId: "b" },
      expected: ["user_id", "userId", "userId"],
    },
    {
      name: "pascal",
      api: mod.pascal,
      input: { user_id: "a", UserId: "b" },
      expected: ["user_id", "UserId", "UserId"],
    },
    {
      name: "snake",
      api: mod.snake,
      input: { userId: "a", user_id: "b" },
      expected: ["userId", "user_id", "user_id"],
    },
    {
      name: "kebab",
      api: mod.kebab,
      input: { userId: "a", user_id: "b" },
      expected: ["userId", "user_id", "user-id"],
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
      let collision: any = null;
      try {
        family.api[variant](family.input);
      } catch (error: any) {
        collision = error;
      }
      if (collision === null) {
        throw new Error(
          family.name +
            "." +
            variant +
            " silently accepted a literal destination collision",
        );
      }
      for (const key of family.expected) {
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
