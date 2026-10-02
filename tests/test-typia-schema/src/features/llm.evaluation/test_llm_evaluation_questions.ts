import { ILlmEvaluation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation emits one neutral question per decision leaf.
 *
 * The question map is the request body evaluation models consume, so its shape
 * is dictated by the provider-neutral AI SDK `EvaluationModelV4` question spec,
 * not by typia's implementation: a boolean asks `{ type: "boolean" }`, a string
 * enum asks a `choice` whose criteria map each option to its member description
 * (or `null`), a numeric enum asks a `score` whose criteria list the levels in
 * ascending value order, a literal-set array asks one boolean per member, and
 * nested objects flatten into readable path keys.
 *
 * 1. Declare a decision type covering every question family, with a numeric enum
 *    declared out of order and an undocumented choice option.
 * 2. Generate the evaluation.
 * 3. Assert the exact question map.
 *
 * @evidence contracts/testing.md#behavioral-verification Native evaluation generation emits a complete literal question map for booleans, string/numeric enums, set members and nested decision leaves, retaining source instructions and member criteria.
 * @evidence contracts/testing.md#independent-expectations The ILlmEvaluation request representation and handwritten JSDoc/enum values determine every expected question. The map is authored literally and satisfies the public question type; it is not a captured emitted snapshot.
 * @evidence contracts/testing.md#distinguishing-cases An out-of-order numeric enum must sort score levels, undocumented choice criteria stay null, sets split into member booleans, and nested parent documentation is omitted while leaf documentation is retained.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_questions is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. An out-of-order numeric enum must sort score levels, undocumented choice criteria stay null, sets split into member booleans, and nested parent documentation is omitted while leaf documentation is retained. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_questions = (): void => {
  const evaluation: ILlmEvaluation<ITicketTriage> =
    typia.llm.evaluation<ITicketTriage>();
  TestEquality.equals("questions", evaluation.questions, {
    urgent: {
      type: "boolean",
      instructions: "Does the customer convey urgency?",
    },
    department: {
      type: "choice",
      instructions: "Which team should handle this ticket?",
      criteria: {
        billing: "Payments, invoicing, refunds",
        technical: "Bugs, outages, integrations",
        sales: null,
      },
    },
    frustration: {
      type: "score",
      instructions: "How frustrated is the customer?",
      criteria: ["Calm", "Annoyed", "Angry"],
    },
    "products.card": {
      type: "boolean",
      instructions:
        'Which products does the customer mention?\n\nDoes the option "card" apply?',
    },
    "products.loan": {
      type: "boolean",
      instructions:
        'Which products does the customer mention?\n\nDoes the option "loan" apply?',
    },
    "refund.requested": {
      type: "boolean",
      instructions: "Does the customer ask for a refund?",
    },
  } satisfies Record<string, ILlmEvaluation.IQuestion>);
};

enum Department {
  /** Payments, invoicing, refunds */
  billing = "billing",
  /** Bugs, outages, integrations */
  technical = "technical",
  sales = "sales",
}

enum Frustration {
  /** Angry */
  angry = 2,
  /** Calm */
  calm = 0,
  /** Annoyed */
  annoyed = 1,
}

interface ITicketTriage {
  /** Does the customer convey urgency? */
  urgent: boolean;

  /** Which team should handle this ticket? */
  department: Department;

  /** How frustrated is the customer? */
  frustration: Frustration;

  /** Which products does the customer mention? */
  products: Array<"card" | "loan">;

  /** Refund details, not forwarded to the model. */
  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean;
  };
}
