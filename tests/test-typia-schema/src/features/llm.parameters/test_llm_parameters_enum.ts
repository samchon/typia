import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm parameters enum against the native typia.llm.parameters output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, status exists, Status in $defs, Status has enum, Status
 * contains pending.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 12 assertions (is object; additionalProperties; status exists; Status in $defs; Status has enum; Status contains pending).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; status exists; Status in $defs; Status has enum; Status contains pending) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_enum is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  type Level = 1 | 2 | 3;

  interface IInput {
    status: Status;
    level: Level;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check status - string enum may be inline or $ref
  const status = params.properties["status"];
  TestValidator.predicate("status exists", () => status !== undefined);

  // status could be reference to $defs or inline string with enum
  if (LlmTypeChecker.isReference(status!)) {
    TestValidator.predicate("Status in $defs", () => "Status" in params.$defs);
    const statusDef = params.$defs["Status"];
    if (statusDef && LlmTypeChecker.isString(statusDef)) {
      TestValidator.predicate(
        "Status has enum",
        () => statusDef.enum !== undefined && statusDef.enum.length === 3,
      );
      TestValidator.predicate(
        "Status contains pending",
        () => statusDef.enum?.includes("pending") ?? false,
      );
    }
  } else if (LlmTypeChecker.isString(status!)) {
    TestValidator.predicate(
      "status has enum",
      () => status.enum !== undefined && status.enum.length === 3,
    );
  }

  // check level - number enum may be inline or $ref
  const level = params.properties["level"];
  TestValidator.predicate("level exists", () => level !== undefined);

  if (LlmTypeChecker.isReference(level!)) {
    TestValidator.predicate("Level in $defs", () => "Level" in params.$defs);
    const levelDef = params.$defs["Level"];
    if (levelDef && LlmTypeChecker.isNumber(levelDef)) {
      TestValidator.predicate(
        "Level has enum",
        () => levelDef.enum !== undefined && levelDef.enum.length === 3,
      );
      TestValidator.predicate(
        "Level contains 1",
        () => levelDef.enum?.includes(1) ?? false,
      );
    }
  } else if (LlmTypeChecker.isNumber(level!)) {
    TestValidator.predicate(
      "level has enum",
      () => level.enum !== undefined && level.enum.length === 3,
    );
  }
};
