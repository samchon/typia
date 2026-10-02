import type {
  AmbientCallAlias,
  AmbientCallInterface,
  AmbientCallLiteral,
  AmbientConstructAlias,
  AmbientConstructInterface,
  AmbientConstructLiteral,
} from "ambient-callable-declarations";
import typia from "typia";

import type {
  ReexportedCallAlias,
  ReexportedCallInterface,
  ReexportedCallLiteral,
  ReexportedConstructAlias,
  ReexportedConstructInterface,
  ReexportedConstructLiteral,
} from "./fixtures/callable_reexport";

type LocalCallLiteral = {
  (value: number): string;
};
type LocalCallAlias = (value: number) => string;
interface LocalCallInterface {
  (value: number): string;
}
type LocalConstructLiteral = {
  new (value: number): {
    value: number;
  };
};
type LocalConstructAlias = new (value: number) => {
  value: number;
};
interface LocalConstructInterface {
  new (value: number): {
    value: number;
  };
}
type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
type _LocalCall = Assert<Same<LocalCallLiteral, LocalCallAlias>>;
type _LocalCallInterface = Assert<Same<LocalCallLiteral, LocalCallInterface>>;
type _LocalConstruct = Assert<Same<LocalConstructLiteral, LocalConstructAlias>>;
type _LocalConstructInterface = Assert<
  Same<LocalConstructLiteral, LocalConstructInterface>
>;
type _ReexportedCall = Assert<Same<ReexportedCallLiteral, ReexportedCallAlias>>;
type _ReexportedCallInterface = Assert<
  Same<ReexportedCallLiteral, ReexportedCallInterface>
>;
type _ReexportedConstruct = Assert<
  Same<ReexportedConstructLiteral, ReexportedConstructAlias>
>;
type _ReexportedConstructInterface = Assert<
  Same<ReexportedConstructLiteral, ReexportedConstructInterface>
>;
type _AmbientCall = Assert<Same<AmbientCallLiteral, AmbientCallAlias>>;
type _AmbientCallInterface = Assert<
  Same<AmbientCallLiteral, AmbientCallInterface>
>;
type _AmbientConstruct = Assert<
  Same<AmbientConstructLiteral, AmbientConstructAlias>
>;
type _AmbientConstructInterface = Assert<
  Same<AmbientConstructLiteral, AmbientConstructInterface>
>;
const directLocalCallLiteral = (input: unknown): boolean =>
  typia.is<LocalCallLiteral>(input);
const factoryLocalCallLiteral = typia.createIs<LocalCallLiteral>();
const directLocalCallAlias = (input: unknown): boolean =>
  typia.is<LocalCallAlias>(input);
const factoryLocalCallAlias = typia.createIs<LocalCallAlias>();
const directLocalCallInterface = (input: unknown): boolean =>
  typia.is<LocalCallInterface>(input);
const factoryLocalCallInterface = typia.createIs<LocalCallInterface>();
const directLocalConstructLiteral = (input: unknown): boolean =>
  typia.is<LocalConstructLiteral>(input);
const factoryLocalConstructLiteral = typia.createIs<LocalConstructLiteral>();
const directLocalConstructAlias = (input: unknown): boolean =>
  typia.is<LocalConstructAlias>(input);
const factoryLocalConstructAlias = typia.createIs<LocalConstructAlias>();
const directLocalConstructInterface = (input: unknown): boolean =>
  typia.is<LocalConstructInterface>(input);
const factoryLocalConstructInterface =
  typia.createIs<LocalConstructInterface>();
const directReexportedCallLiteral = (input: unknown): boolean =>
  typia.is<ReexportedCallLiteral>(input);
const factoryReexportedCallLiteral = typia.createIs<ReexportedCallLiteral>();
const directReexportedCallAlias = (input: unknown): boolean =>
  typia.is<ReexportedCallAlias>(input);
const factoryReexportedCallAlias = typia.createIs<ReexportedCallAlias>();
const directReexportedCallInterface = (input: unknown): boolean =>
  typia.is<ReexportedCallInterface>(input);
const factoryReexportedCallInterface =
  typia.createIs<ReexportedCallInterface>();
const directReexportedConstructLiteral = (input: unknown): boolean =>
  typia.is<ReexportedConstructLiteral>(input);
const factoryReexportedConstructLiteral =
  typia.createIs<ReexportedConstructLiteral>();
const directReexportedConstructAlias = (input: unknown): boolean =>
  typia.is<ReexportedConstructAlias>(input);
const factoryReexportedConstructAlias =
  typia.createIs<ReexportedConstructAlias>();
const directReexportedConstructInterface = (input: unknown): boolean =>
  typia.is<ReexportedConstructInterface>(input);
const factoryReexportedConstructInterface =
  typia.createIs<ReexportedConstructInterface>();
const directAmbientCallLiteral = (input: unknown): boolean =>
  typia.is<AmbientCallLiteral>(input);
const factoryAmbientCallLiteral = typia.createIs<AmbientCallLiteral>();
const directAmbientCallAlias = (input: unknown): boolean =>
  typia.is<AmbientCallAlias>(input);
const factoryAmbientCallAlias = typia.createIs<AmbientCallAlias>();
const directAmbientCallInterface = (input: unknown): boolean =>
  typia.is<AmbientCallInterface>(input);
const factoryAmbientCallInterface = typia.createIs<AmbientCallInterface>();
const directAmbientConstructLiteral = (input: unknown): boolean =>
  typia.is<AmbientConstructLiteral>(input);
const factoryAmbientConstructLiteral =
  typia.createIs<AmbientConstructLiteral>();
const directAmbientConstructAlias = (input: unknown): boolean =>
  typia.is<AmbientConstructAlias>(input);
const factoryAmbientConstructAlias = typia.createIs<AmbientConstructAlias>();
const directAmbientConstructInterface = (input: unknown): boolean =>
  typia.is<AmbientConstructInterface>(input);
const factoryAmbientConstructInterface =
  typia.createIs<AmbientConstructInterface>();
// Keep every original compile-time equivalence assertion checked in this consumer project.
void (null as unknown as [
  _LocalCall,
  _LocalCallInterface,
  _LocalConstruct,
  _LocalConstructInterface,
  _ReexportedCall,
  _ReexportedCallInterface,
  _ReexportedConstruct,
  _ReexportedConstructInterface,
  _AmbientCall,
  _AmbientCallInterface,
  _AmbientConstruct,
  _AmbientConstructInterface,
]);
/**
 * Verifies callable types retain behavior across declaration provenance.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Local, re-exported and ambient call/construct declarations retain all three spellings, direct/factory producers, and real versus placeholder inputs; compiled Same assertions preserve the type-level premise.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Local, re-exported and ambient call/construct declarations retain all three spellings, direct/factory producers, and real versus placeholder inputs; compiled Same assertions preserve the type-level premise. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_callable_type_literal_provenance = (
  mode: "default" | "functional" = "functional",
): void => {
  const mod: Record<string, any> = {
    directLocalCallLiteral,
    factoryLocalCallLiteral,
    directLocalCallAlias,
    factoryLocalCallAlias,
    directLocalCallInterface,
    factoryLocalCallInterface,
    directLocalConstructLiteral,
    factoryLocalConstructLiteral,
    directLocalConstructAlias,
    factoryLocalConstructAlias,
    directLocalConstructInterface,
    factoryLocalConstructInterface,
    directReexportedCallLiteral,
    factoryReexportedCallLiteral,
    directReexportedCallAlias,
    factoryReexportedCallAlias,
    directReexportedCallInterface,
    factoryReexportedCallInterface,
    directReexportedConstructLiteral,
    factoryReexportedConstructLiteral,
    directReexportedConstructAlias,
    factoryReexportedConstructAlias,
    directReexportedConstructInterface,
    factoryReexportedConstructInterface,
    directAmbientCallLiteral,
    factoryAmbientCallLiteral,
    directAmbientCallAlias,
    factoryAmbientCallAlias,
    directAmbientCallInterface,
    factoryAmbientCallInterface,
    directAmbientConstructLiteral,
    factoryAmbientConstructLiteral,
    directAmbientConstructAlias,
    factoryAmbientConstructAlias,
    directAmbientConstructInterface,
    factoryAmbientConstructInterface,
  };
  const selectedMode = mode;
  const modules: any = { [mode]: mod };
  let calls = 0;
  const failures: string[] = [];
  const callable = (value: any) => String(value);
  class Constructable {
    constructor(public value: any) {
      this.value = value;
    }
  }
  // A declaration's provenance is not part of its type, so the four-cell function
  // contract has to hold identically for a local declaration, one imported from a
  // sibling module, and one from an ambient module declaration.
  const expectations: any = {
    default: { real: true, placeholder: true },
    functional: { real: true, placeholder: false },
  };
  for (const provenance of ["Local", "Reexported", "Ambient"]) {
    for (const kind of ["Call", "Construct"]) {
      const real: any = kind === "Call" ? callable : Constructable;
      for (const spelling of ["Literal", "Alias", "Interface"]) {
        for (const form of ["direct", "factory"]) {
          const name: any = form + provenance + kind + spelling;
          for (const mode of [selectedMode]) {
            for (const [label, value] of [
              ["real", real],
              ["placeholder", {}],
            ]) {
              calls += 1;
              const validator: any = modules[mode][name];
              if (typeof validator !== "function") {
                failures.push("missing export " + mode + " " + name);
                continue;
              }
              const actual: any = validator(value);
              const expected: any = expectations[mode][label];
              if (actual !== expected) {
                failures.push(
                  mode +
                    " " +
                    name +
                    " " +
                    label +
                    ": expected " +
                    expected +
                    " but got " +
                    actual,
                );
              }
            }
          }
        }
      }
    }
  }
  if (failures.length !== 0)
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  if (calls !== 72)
    throw new Error(
      "callable provenance matrix ran " + calls + " instead of 72",
    );
};
