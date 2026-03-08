import { dedent } from "@typia/utils";
import typia, { ILlmApplication, ILlmFunction, tags } from "typia";

const app: ILlmApplication = typia.llm.application<OrderService>();
const func: ILlmFunction = app.functions[0];

// LLM often returns malformed JSON with wrong types
const llmOutput = dedent`
  Here is your order:

  \`\`\`json
  {
    "order": {
      "payment": "{\"type\":\"card\",\"cardNumber\":\"1234-5678\"}"
      "product": {
        name: "Laptop",
        price: "1299.99",
        quantity: 2,
      },
      "customer": {
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
