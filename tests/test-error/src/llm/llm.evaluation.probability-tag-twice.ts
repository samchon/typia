import typia, { tags } from "typia";

// TWO PROBABILITY TAGS ON ONE MEMBER ARE AMBIGUOUS
typia.llm.evaluation<{
  /** What should happen next? */
  action:
    | ("escalate" & tags.Probability<0.5> & tags.Probability<0.6>)
    | "reply";
}>();
