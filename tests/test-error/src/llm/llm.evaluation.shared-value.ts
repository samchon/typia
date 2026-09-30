import typia from "typia";

enum Team {
  /** Payments */
  billing = "shared",
  /** Refunds */
  refunds = "shared",
  /** Outages */
  technical = "technical",
}

// TWO ENUM MEMBERS MUST NOT SHARE ONE VALUE
typia.llm.evaluation<{
  /** Which team? */
  team: Team;
}>();
