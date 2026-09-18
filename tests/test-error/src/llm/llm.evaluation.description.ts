import typia from "typia";

// THE QUESTION KEY IS NOT SENT TO THE MODEL, SO THE JSDOC IS THE QUESTION
typia.llm.evaluation<{
  urgent: boolean;
}>();
