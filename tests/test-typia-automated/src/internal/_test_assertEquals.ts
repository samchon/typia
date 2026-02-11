import { TestStructure } from "@typia/template";
import typia, { TypeGuardError } from "typia";
import { Escaper } from "typia/src/utils/Escaper";

export const _test_assertEquals =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assertEquals: (input: T) => T): void => {
    const input: T = factory.generate();

    // EXACT TYPE
    try {
      const output: T = assertEquals(input);
      if (input !== output)
        throw new Error(
          "Bug on typia.assertEquals(): failed to return input value.",
        );
    } catch (exp) {
      if ((exp as Function).constructor?.name === ErrorClass.name) {
        throw new Error(
          `Bug on typia.assertEquals(): failed to understand the ${name} type.`,
        );
      } else throw exp;
    }

    // WRONG TYPES
    const accessors: IAccessor[] = [];
    trace(accessors, "$input", input);

    if (factory.ADDABLE === false || accessors.length === 0) return;

    // SPOIL PROPERTIES
    for (const { path, value } of accessors) {
      const variable: boolean = Math.random() < 0.5;
      const key: string = variable ? "non_regular_type" : "non-regular-type";
      const fullPath: string = variable
        ? `${path}.${key}`
        : `${path}["${key}"]`;

      value[key] = key;

      try {
        assertEquals(input);
        throw new Error(
          `Bug on typia.assertEquals(): failed to detect surplus property on the ${name} type.`,
        );
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp) &&
          (exp.method === "typia.assertEquals" ||
            exp.method === "typia.createAssertEquals") &&
          exp.path === fullPath &&
          exp.expected === "undefined" &&
          exp.value === key
        ) {
          delete value[key];
          continue;
        } else if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        ) {
          console.log({
            method: exp.method,
            path: exp.path,
            full: fullPath,
            actual: exp.expected,
          });
          throw new Error(
            `Bug on typia.assertEquals(): failed to detect surplus property on the ${name} type.`,
          );
        } else throw exp;
      }
    }
  };

function trace(accessors: IAccessor[], path: string, input: any): void {
  if (Array.isArray(input)) trace_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    trace_object(accessors, path, input);
}

function trace_object(accessors: IAccessor[], path: string, obj: any): void {
  accessors.push({
    path,
    value: obj,
  });
  for (const [key, value] of Object.entries(obj))
    trace(
      accessors,
      Escaper.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function trace_array(accessors: IAccessor[], path: string, array: any[]): void {
  array.forEach((elem, i) => trace(accessors, `${path}[${i}]`, elem));
}

interface IAccessor {
  path: string;
  value: any;
}
