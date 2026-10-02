import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation emits the same questions for every equivalent
 * TypeScript spelling of one decision type.
 *
 * The transform reads resolved metadata, so an interface, a type alias, an
 * intersection, a generic instantiation, and a class with fields must all ask
 * the same questions; so must a leaf reached through a type alias or a
 * `readonly` array. A spelling that took another metadata path, such as an
 * unabsorbed alias or a readonly array bucket, would otherwise be rejected or
 * lose its descriptions for that spelling alone.
 *
 * 1. Spell one decision type six ways, with aliased leaves and a readonly set.
 * 2. Generate the questions of each spelling.
 * 3. Assert every spelling equals the interface's questions.
 *
 * @evidence contracts/testing.md#behavioral-verification Six native evaluation type spellings emit the same questions, with the interface baseline first checked against a full handwritten question map.
 * @evidence contracts/testing.md#independent-expectations The literal interface question map establishes independent expected instructions, criteria and keys before other generated spellings are compared with it. Parity cannot hide shared errors in those pinned fields, but unasserted metadata is not certified.
 * @evidence contracts/testing.md#distinguishing-cases Interface, alias, intersection, generic instantiation, class fields and readonly arrays preserve equivalent meaning while taking different type-analysis paths; tagged/indexed-access distinctions live in separate cases.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_type_spellings is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Interface, alias, intersection, generic instantiation, class fields and readonly arrays preserve equivalent meaning while taking different type-analysis paths; tagged/indexed-access distinctions live in separate cases. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_type_spellings = (): void => {
  const expected = typia.llm.evaluation<IInterface>().questions;
  TestEquality.equals("interface", expected, {
    urgent: { type: "boolean", instructions: "Is it urgent?" },
    team: {
      type: "choice",
      instructions: "Which team?",
      criteria: { billing: null, technical: null },
    },
    "channels.email": {
      type: "boolean",
      instructions: 'Which channels?\n\nDoes the option "email" apply?',
    },
    "channels.phone": {
      type: "boolean",
      instructions: 'Which channels?\n\nDoes the option "phone" apply?',
    },
  });
  TestEquality.equals(
    "alias",
    typia.llm.evaluation<IAlias>().questions,
    expected,
  );
  TestEquality.equals(
    "intersection",
    typia.llm.evaluation<IUrgent & ITeam & IChannels>().questions,
    expected,
  );
  TestEquality.equals(
    "generic",
    typia.llm.evaluation<IGeneric<Flag>>().questions,
    expected,
  );
  TestEquality.equals(
    "class",
    typia.llm.evaluation<Decision>().questions,
    expected,
  );
  TestEquality.equals(
    "readonly",
    typia.llm.evaluation<IReadonly>().questions,
    expected,
  );
};

type Flag = boolean;
type TeamName = "billing" | "technical";
type ChannelName = "email" | "phone";

interface IInterface {
  /** Is it urgent? */
  urgent: boolean;
  /** Which team? */
  team: "billing" | "technical";
  /** Which channels? */
  channels: Array<"email" | "phone">;
}

type IAlias = {
  /** Is it urgent? */
  urgent: Flag;
  /** Which team? */
  team: TeamName;
  /** Which channels? */
  channels: ChannelName[];
};

interface IUrgent {
  /** Is it urgent? */
  urgent: boolean;
}
interface ITeam {
  /** Which team? */
  team: TeamName;
}
interface IChannels {
  /** Which channels? */
  channels: ChannelName[];
}

interface IGeneric<T> {
  /** Is it urgent? */
  urgent: T;
  /** Which team? */
  team: TeamName;
  /** Which channels? */
  channels: Array<ChannelName>;
}

class Decision {
  /** Is it urgent? */
  public urgent!: boolean;
  /** Which team? */
  public team!: TeamName;
  /** Which channels? */
  public channels!: ChannelName[];
}

interface IReadonly {
  /** Is it urgent? */
  readonly urgent: boolean;
  /** Which team? */
  readonly team: TeamName;
  /** Which channels? */
  readonly channels: ReadonlyArray<ChannelName>;
}
