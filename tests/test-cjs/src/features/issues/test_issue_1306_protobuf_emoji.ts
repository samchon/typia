import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

interface ITest {
  test: string;
}

export const test_issue_1306_protobuf_emoji = (): void => {
  const input: ITest = {
    test: "🫢",
  };
  const encoded: Uint8Array = typia.protobuf.encode<ITest>(input);
  const decoded: ITest = typia.protobuf.decode<ITest>(encoded);

  TestValidator.equals("decoded")(decoded)(input);
  TestValidator.equals("length")(decoded.test.length)(input.test.length);
};
