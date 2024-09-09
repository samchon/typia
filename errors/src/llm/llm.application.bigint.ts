import typia from "typia";

typia.llm.application<Controller>();

interface Controller {
  plus(X: bigint, y: bigint): bigint;
}
