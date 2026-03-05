import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_protobuf_message_array = (): void => {
  interface IProduct {
    name: string;
    prices: (number & typia.tags.Type<"double">)[];
    tags: string[];
  }

  const message: string = typia.protobuf.message<IProduct>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IProduct"),
  );
  TestValidator.predicate("contains repeated double prices", () =>
    message.includes("repeated double prices"),
  );
  TestValidator.predicate("contains repeated string tags", () =>
    message.includes("repeated string tags"),
  );
};
