import * as consumerAlias from "./fixtures/callable_consumer_alias";
import * as consumerInterface from "./fixtures/callable_consumer_interface";
import * as consumerLiteral from "./fixtures/callable_consumer_literal";

/**
 * Verifies callable member spellings agree across public consumers.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Twenty-three public consumer families compare interface/literal/alias observations; six independent anchors require function acceptance, JSON omission, clone/classify omission, declared-slot pruning and equality ignoring function identity.
 * @evidence contracts/testing.md#independent-expectations The six literal anchors independently pin function acceptance, JSON omission, clone/classify omission, declared-slot pruning and ignored function identity. The other 69 observations compare mutually equivalent spellings; a defect shared by all three spellings can escape those parity rows, so they do not independently certify every consumer family.
 * @evidence contracts/testing.md#distinguishing-cases Twenty-three public consumer families compare interface/literal/alias observations; six independent anchors require function acceptance, JSON omission, clone/classify omission, declared-slot pruning and equality ignoring function identity.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_callable_type_literal_consumers = (): void => {
  const modules: any = {
    interface: consumerInterface,
    literal: consumerLiteral,
    alias: consumerAlias,
  };
  let families: any = 0;
  let anchors = 0;
  const failures: string[] = [];
  const fn = (input: any) => ({ value: String(input.value) });
  const other = (input: any) => ({ value: "other:" + input.value });
  const holder = () => ({ fn });
  // Each family is reduced to a JSON-comparable observation so three independent
  // emits can be compared as behavior rather than as text.
  const observations: any = {
    is: (mod: any) => [mod.is(holder()), mod.is({}), mod.is({ fn: {} })],
    validate: (mod: any) => [
      mod.validate(holder()).success,
      mod.validate({}).success,
    ],
    functional: (mod: any) => [
      typeof mod.functional,
      Object.keys(mod.functional(holder()) || {}),
    ],
    random: (mod: any) => Object.keys(mod.random()),
    clone: (mod: any) => mod.clone(holder()),
    prune: (mod: any) => {
      const value: any = holder();
      mod.prune(value);
      return Object.keys(value);
    },
    classify: (mod: any) => mod.classify(holder()),
    camel: (mod: any) => mod.camel(holder()),
    pascal: (mod: any) => mod.pascal(holder()),
    equals: (mod: any) => [
      mod.equals(holder(), holder()),
      mod.equals({ fn }, { fn: other }),
    ],
    cover: (mod: any) => [mod.cover(holder(), holder())],
    stringify: (mod: any) => mod.stringify(holder()),
    jsonSchema: (mod: any) => mod.jsonSchema,
    jsonSchemas: (mod: any) => mod.jsonSchemas,
    jsonApplication: (mod: any) => mod.jsonApplication,
    reflectSchema: (mod: any) => mod.reflectSchema,
    reflectSchemas: (mod: any) => mod.reflectSchemas,
    reflectName: (mod: any) => mod.reflectName,
    llmSchema: (mod: any) => mod.llmSchema,
    llmParameters: (mod: any) => mod.llmParameters,
    httpFormData: (mod: any) => {
      const value: any = new FormData();
      value.set("fn", "value");
      return mod.httpFormData(value);
    },
    httpHeaders: (mod: any) => mod.httpHeaders(new Headers({ fn: "value" })),
    httpQuery: (mod: any) =>
      mod.httpQuery(new URLSearchParams({ fn: "value" })),
  };
  for (const [family, observe] of Object.entries(observations) as [
    string,
    any,
  ][]) {
    const answers: any = {};
    for (const spelling of ["interface", "literal", "alias"]) {
      families += 1;
      try {
        answers[spelling] = JSON.stringify(observe(modules[spelling]));
      } catch (error: any) {
        answers[spelling] = "threw " + String(error && error.message);
      }
    }
    for (const spelling of ["literal", "alias"]) {
      if (answers[spelling] !== answers.interface) {
        failures.push(
          "consumer " +
            family +
            ": interface=" +
            answers.interface +
            " " +
            spelling +
            "=" +
            answers[spelling],
        );
      }
    }
  }
  // Parity cannot see a change that moves every spelling the same way, so these
  // pin what a function slot means to the consumers that must act on it, taken
  // from typia's published behavior for a function-typed member: it is not JSON
  // data, it is not reconstructed by a plain copy, and it carries no identity that
  // structural equality could compare.
  const anchorRows: any = [
    ["is accepts a real function", (mod: any) => mod.is(holder()), true],
    [
      "stringify omits the function slot",
      (mod: any) => mod.stringify(holder()),
      "{}",
    ],
    [
      "clone drops the function slot",
      (mod: any) => mod.clone(holder()).fn,
      undefined,
    ],
    [
      "classify drops the function slot",
      (mod: any) => mod.classify(holder()).fn,
      undefined,
    ],
    [
      "prune keeps the declared slot",
      (mod: any) => {
        const value: any = holder();
        mod.prune(value);
        return value.fn;
      },
      fn,
    ],
    [
      "equals ignores function identity",
      (mod: any) => mod.equals({ fn }, { fn: other }),
      true,
    ],
  ];
  for (const [label, observe, expected] of anchorRows) {
    anchors += 1;
    const actual: any = observe(modules.interface);
    if (actual !== expected) {
      failures.push(
        "consumer anchor " +
          label +
          ": expected " +
          expected +
          " but got " +
          actual,
      );
    }
  }
  if (failures.length !== 0)
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  if (families !== 69 || anchors !== 6)
    throw new Error(
      "incomplete callable consumer observations " + [families, anchors],
    );
};
