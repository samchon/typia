import typia, { tags } from "typia";

// A REQUIREMENT FINER THAN THE CONFIGURED DECIMALS, TWO BY DEFAULT
typia.llm.evaluation<{
  /** Which team? */
  team:
    | ("billing" & tags.Probability<0.334>)
    | ("technical" & tags.Probability<0.333>)
    | ("sales" & tags.Probability<0.333>);
}>();
