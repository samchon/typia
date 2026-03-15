import typia, { IValidation } from "typia";

interface IApplication {
  hello(): void;
}

const validate = (input: unknown): IValidation<unknown> => {
  return {
    success: true,
    data: input,
  };
};

const app = typia.llm.application<IApplication>({
  validate: {
    hello: validate,
  },
});
console.log(app.functions[0]?.validate === validate);

const controllere = typia.llm.controller<IApplication>(
  "app",
  {
    hello: () => {},
  },
  {
    validate: {
      hello: validate,
    },
  },
);
console.log(controllere.application.functions[0]?.validate === validate);
