import typia from "typia";

export function test_llm_controller(): void {
  const controller = typia.llm.controller<ICalculator, "chatgpt">("add", {
    plus: (props: { x: number; y: number }) => props.x + props.y,
    minus: (props: { x: number; y: number }) => props.x - props.y,
    multiply: (props: { x: number; y: number }) => props.x * props.y,
    divide: (props: { x: number; y: number }) => props.x / props.y,
  });
  typia.assert(controller);
}

interface ICalculator {
  plus(props: { x: number; y: number }): number;
  minus(props: { x: number; y: number }): number;
  multiply(props: { x: number; y: number }): number;
  divide(props: { x: number; y: number }): number;
}
