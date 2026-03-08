import { LlmJson } from "@typia/utils";
import typia, { IValidation, tags } from "typia";

// LLM generated invalid data
const input = {
  order: {
    payment: { type: "card", cardNumber: 12345678 }, // should be string
    product: {
      name: "Laptop",
      price: -100, // violates Minimum<0>
      quantity: 2.5, // should be uint32
    },
    customer: {
      name: "John Doe",
      email: "invalid-email", // violates Format<"email">
      vip: "yes", // should be boolean
    },
  },
};

// Validate and format errors for LLM feedback
const result: IValidation<IProps> = typia.validate<IProps>(input);
if (result.success === false) {
  const feedback: string = LlmJson.stringify(result);
  console.log(feedback);
}

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
