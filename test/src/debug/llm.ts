import typia from "typia";

type MyFunction = () => void;

interface MyClass {
  operation: MyFunction;
  plus(props: { x: number; y: number }): number;
}

const app = typia.llm.application<Pick<MyClass, "operation">, "chatgpt">();
console.log(app);
