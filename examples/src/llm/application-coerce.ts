import typia, { ILlmApplication, ILlmFunction, tags } from "typia";

const app: ILlmApplication = typia.llm.application<OrderService>();
const func: ILlmFunction = app.functions[0];

// Anthropic, Vercel AI, LangChain, MCP already parse JSON internally.
// However, types are often wrong:
const fromSdk = {
  order: {
    payment: '{"type":"card","cardNumber":"1234-5678"}', // stringified
    product: {
      name: "Laptop",
      price: "1299.99", // string instead of number
      quantity: "2", // string instead of number
    },
    customer: {
      name: "John Doe",
      email: "john@example.com",
      vip: "true", // string instead of boolean
    },
  },
};

const result = func.coerce(fromSdk);
console.log(result);

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
