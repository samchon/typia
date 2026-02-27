import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_parameters_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  type Level = 1 | 2 | 3;

  interface IInput {
    status: Status;
    level: Level;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestValidator.equals("additionalProperties", params.additionalProperties, false);

  // check status - string enum may be inline or $ref
  const status = params.properties["status"];
  TestValidator.predicate("status exists", () => status !== undefined);

  // status could be reference to $defs or inline string with enum
  if (LlmTypeChecker.isReference(status!)) {
    TestValidator.predicate("Status in $defs", () => "Status" in params.$defs);
    const statusDef = params.$defs["Status"];
    if (statusDef && LlmTypeChecker.isString(statusDef)) {
      TestValidator.predicate("Status has enum", () =>
        statusDef.enum !== undefined && statusDef.enum.length === 3,
      );
      TestValidator.predicate("Status contains pending", () =>
        statusDef.enum?.includes("pending") ?? false,
      );
    }
  } else if (LlmTypeChecker.isString(status!)) {
    TestValidator.predicate("status has enum", () =>
      status.enum !== undefined && status.enum.length === 3,
    );
  }

  // check level - number enum may be inline or $ref
  const level = params.properties["level"];
  TestValidator.predicate("level exists", () => level !== undefined);

  if (LlmTypeChecker.isReference(level!)) {
    TestValidator.predicate("Level in $defs", () => "Level" in params.$defs);
    const levelDef = params.$defs["Level"];
    if (levelDef && LlmTypeChecker.isNumber(levelDef)) {
      TestValidator.predicate("Level has enum", () =>
        levelDef.enum !== undefined && levelDef.enum.length === 3,
      );
      TestValidator.predicate("Level contains 1", () =>
        levelDef.enum?.includes(1) ?? false,
      );
    }
  } else if (LlmTypeChecker.isNumber(level!)) {
    TestValidator.predicate("level has enum", () =>
      level.enum !== undefined && level.enum.length === 3,
    );
  }
};
