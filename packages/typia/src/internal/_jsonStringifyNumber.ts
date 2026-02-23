import { TypeGuardError } from "../TypeGuardError";

export const _jsonStringifyNumber = (value: number): number => {
  if (isFinite(value) === false)
    throw new TypeGuardError({
      method: "typia.json.stringify",
      expected: "number",
      value,
      message: "Error on typia.json.stringify(): infinite or not a number.",
    });
  return value;
};
