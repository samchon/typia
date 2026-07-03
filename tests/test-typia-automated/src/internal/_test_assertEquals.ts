import { TestStructure } from "@typia/template";
import { NamingConvention } from "@typia/utils";
import typia, { TypeGuardError } from "typia";

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
    trace(
      accessors,
      new WeakMap<object, IAccessor>(),
      new WeakSet<object>(),
      "$input",
      input,
    );

    if (factory.ADDABLE === false || accessors.length === 0) return;

    // SPOIL PROPERTIES
    for (const { paths, value } of accessors) {
      const variable: boolean = Math.random() < 0.5;
      const key: string = variable ? "non_regular_type" : "non-regular-type";
      const fullPaths: string[] = paths.map((path) =>
        variable ? `${path}.${key}` : `${path}["${key}"]`,
      );

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
          typeof exp.path === "string" &&
          fullPaths.includes(exp.path) &&
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
            full: fullPaths,
            actual: exp.expected,
          });
          throw new Error(
            `Bug on typia.assertEquals(): failed to detect surplus property on the ${name} type.`,
          );
        } else throw exp;
      }
    }
  };

function trace(
  accessors: IAccessor[],
  accessorMap: WeakMap<object, IAccessor>,
  stack: WeakSet<object>,
  path: string,
  input: any,
): void {
  if (Array.isArray(input))
    trace_array(accessors, accessorMap, stack, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    trace_object(accessors, accessorMap, stack, path, input);
}

function trace_object(
  accessors: IAccessor[],
  accessorMap: WeakMap<object, IAccessor>,
  stack: WeakSet<object>,
  path: string,
  obj: any,
): void {
  let accessor: IAccessor | undefined = accessorMap.get(obj);
  if (accessor === undefined) {
    accessor = {
      paths: [],
      value: obj,
    };
    accessorMap.set(obj, accessor);
    accessors.push(accessor);
  }
  accessor.paths.push(path);
  if (stack.has(obj)) return;

  stack.add(obj);
  for (const [key, value] of Object.entries(obj))
    trace(
      accessors,
      accessorMap,
      stack,
      NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
  stack.delete(obj);
}

function trace_array(
  accessors: IAccessor[],
  accessorMap: WeakMap<object, IAccessor>,
  stack: WeakSet<object>,
  path: string,
  array: any[],
): void {
  if (stack.has(array)) return;
  stack.add(array);
  array.forEach((elem, i) =>
    trace(accessors, accessorMap, stack, `${path}[${i}]`, elem),
  );
  stack.delete(array);
}

interface IAccessor {
  paths: string[];
  value: any;
}
