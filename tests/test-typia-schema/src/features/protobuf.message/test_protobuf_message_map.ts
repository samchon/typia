import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_protobuf_message_map = (): void => {
  interface ICache {
    data: Map<string, string>;
    counts: Map<string, number & typia.tags.Type<"int32">>;
  }

  const message: string = typia.protobuf.message<ICache>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message ICache"),
  );
  TestValidator.predicate("contains map string string", () =>
    message.includes("map<string, string> data"),
  );
  TestValidator.predicate("contains map string int32", () =>
    message.includes("map<string, int32> counts"),
  );
};
