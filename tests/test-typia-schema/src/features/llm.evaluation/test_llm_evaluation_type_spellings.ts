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
