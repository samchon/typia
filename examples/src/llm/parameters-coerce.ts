import { LlmJson } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

const params: ILlmSchema.IParameters = typia.llm.parameters<IProps>();

// Anthropic, Vercel AI, LangChain, MCP already parse JSON internally.
// However, types are often wrong:
const fromSdk = {
  order: {
    payment: '{"type":"card","cardNumber":"1234-5678', // stringified (unclosed)
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

const result = LlmJson.coerce(fromSdk, params);
console.log(result);

interface IProps {
  order: IOrder;
}

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
