import * as std from "../../index";

const EXP_NAMES = [
  "Exception",
  "LogicError",
  "DomainError",
  "LengthError",
  "OutOfRange",
  "RuntimeError",
  "OverflowError",
  "UnderflowError",
] as const;

export function test_exception_names(): void {
  for (const name of EXP_NAMES) {
    const exp: std.Exception = new std[name]("Error Message");
    if (exp.name !== name)
      throw new std.DomainError(
        `Bug on ${exp.constructor.name}.name(): result is not ${name} bu ${exp.name}`,
      );
  }
}
