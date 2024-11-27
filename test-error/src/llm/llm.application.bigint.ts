import typia from "typia";

typia.llm.application<Controller, "chatgpt">();

interface Controller {
  plus(props: { x: bigint; y: bigint }): bigint;
}
