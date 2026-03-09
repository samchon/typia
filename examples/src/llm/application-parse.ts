import { dedent } from "@typia/utils";
import typia, { ILlmApplication, ILlmFunction, tags } from "typia";

const app: ILlmApplication = typia.llm.application<OrderService>();
const func: ILlmFunction = app.functions[0];

// LLM sometimes returns malformed JSON with wrong types
const llmOutput = dedent`
  > LLM sometimes returns some prefix text with markdown JSON code block.

  I'd be happy to help you with your order! 😊

  \`\`\`json
  {
    "order": {
      "payment": "{\"type\":\"card\",\"cardNumber\":\"1234-5678", // unclosed string & bracket
      "product": {
        name: "Laptop", // unquoted key
        price: "1299.99", // wrong type (string instead of number)
        quantity: 2, // trailing comma
      },
      "customer": {
        // incomplete keyword + unclosed brackets
        "name": "John Doe",
        "email": "john@example.com",
        vip: tru
  \`\`\`
`;

const result = func.parse(llmOutput);
if (result.success) console.log(result);

interface IOrder {
  payment: IPayment;
  product: {
    name: string;
    price: number & tags.Minimum<0>;
    quantity: number & tags.Type<"uint32">;
  };
  customer: {
    name: string;
    email: string & tags.Format<"email">;
    vip: boolean;
  };
}

type IPayment =
  | { type: "card"; cardNumber: string }
  | { type: "bank"; accountNumber: string };

declare class OrderService {
  /**
   * Create a new order.
   *
   * @param props Order properties
   */
  createOrder(props: { order: IOrder }): { id: string };
}
