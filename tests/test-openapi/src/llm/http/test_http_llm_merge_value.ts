import { TestValidator } from "@nestia/e2e";
import { HttpLlm } from "@samchon/openapi";

export const test_http_llm_merge_value = (): void => {
  TestValidator.equals("number")(HttpLlm.mergeValue(1, 2))(2);
  TestValidator.equals("nullable")(HttpLlm.mergeValue(0, null))(0);
  TestValidator.equals("optional")(HttpLlm.mergeValue(0, undefined))(0);
  TestValidator.equals("object")(
    HttpLlm.mergeValue(
      {
        a: "A",
        array: [1, 2, 3],
        nestedArray: [{ alpha: "alpha" }, { alpha: "alpha" }],
        object: { x: "X" },
      },
      {
        b: "B",
        array: [3, 4, 5],
        nestedArray: [{ beta: "beta" }, { beta: "beta" }],
        object: { y: "Y" },
      },
    ),
  )({
    a: "A",
    b: "B",
    array: [3, 4, 5],
    nestedArray: [
      {
        alpha: "alpha",
        beta: "beta",
      },
      {
        alpha: "alpha",
        beta: "beta",
      },
    ],
    object: { x: "X", y: "Y" },
  });
  TestValidator.equals("membership")(
    HttpLlm.mergeValue(
      {
        name: "Samchon",
        email: "samchon.github@gmail.com",
        password: "1234",
        age: 30,
        gender: 1,
      },
      {
        homepage: "https://github.com/samchon",
        secret: "something",
      },
    ),
  )({
    name: "Samchon",
    email: "samchon.github@gmail.com",
    password: "1234",
    age: 30,
    gender: 1,
    homepage: "https://github.com/samchon",
    secret: "something",
  });
};
