import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import { NamingConvention } from "@typia/utils";
import typia, { AssertionGuard, TypeGuardError } from "typia";

/**
 * Verifies assertGuardEquals through its supplied operation and fixture.
 *
 * Private tracing separates array traversal from object identity/path
 * collection; an active-stack WeakSet prevents recursive cycles while a WeakMap
 * collects alias paths. One local fixture is mutated and restored on each
 * successful negative scenario.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied assertGuardEquals callback requires clean acceptance, then must reject one injected surplus property per reachable ordinary object. Each exception must have the selected exact prototype, a permitted method, an independently traced path, expected undefined and the injected key value; accepted exceptions remove that key before the next scenario. The authored fixture establishes the clean graph; trace records object identities and reachable accessor paths before independent key injection. NamingConvention supplies quoting and is not independently verified here. The additional generated typia.is check is correlated with the producer.
 * @evidence contracts/common.md#clear-and-simple-design Private tracing separates array traversal from object identity/path collection; an active-stack WeakSet prevents recursive cycles while a WeakMap collects alias paths. One local fixture is mutated and restored on each successful negative scenario.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. ADDABLE false and graphs with no eligible objects stop after clean acceptance. Eligible objects each receive a surplus key; identifier versus quoted key spelling is chosen randomly, so one run does not guarantee both forms. Shared/cyclic path traversal uses weak identity collections; value spoilers belong to the normal validator families.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied assertGuardEquals callback requires clean acceptance, then must reject one injected surplus property per reachable ordinary object. Each exception must have the selected exact prototype, a permitted method, an independently traced path, expected undefined and the injected key value; accepted exceptions remove that key before the next scenario.
 * @evidence contracts/testing.md#independent-expectations The authored fixture establishes the clean graph; trace records object identities and reachable accessor paths before independent key injection. NamingConvention supplies quoting and is not independently verified here. The additional generated typia.is check is correlated with the producer.
 * @evidence contracts/testing.md#distinguishing-cases ADDABLE false and graphs with no eligible objects stop after clean acceptance. Eligible objects each receive a surplus key; identifier versus quoted key spelling is chosen randomly, so one run does not guarantee both forms. Shared/cyclic path traversal uses weak identity collections; value spoilers belong to the normal validator families.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory assertGuardEquals families own the discoverable entries and native callbacks. This helper owns trace, trace_object and trace_array and their cleanup on the accepted-exception path.
 */
export const _test_assertGuardEquals =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assertEquals: AssertionGuard<T>): void => {
    // EXACT TYPE
    const input: T = factory.generate();
    try {
      assertEquals(input);
    } catch (exp) {
      if (
        isErrorClass(exp, ErrorClass) &&
        typia.is<TypeGuardError.IProps>(exp)
      ) {
        throw new Error(
          `Bug on typia.assertGuardEquals(): failed to understand the ${name} type.`,
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
          `Bug on typia.assertGuardEquals(): failed to detect surplus property on the ${name} type.`,
        );
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp) &&
          (exp.method === "typia.assertGuardEquals" ||
            exp.method === "typia.createAssertGuardEquals") &&
          typeof exp.path === "string" &&
          fullPaths.includes(exp.path) &&
          exp.expected === "undefined" &&
          exp.value === key
        ) {
          delete value[key];
          continue;
        } else if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        ) {
          console.log({
            method: exp.method,
            path: exp.path,
            full: fullPaths,
            actual: exp.expected,
          });
          throw new Error(
            `Bug on typia.assertGuardEquals(): failed to detect surplus property on the ${name} type.`,
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
