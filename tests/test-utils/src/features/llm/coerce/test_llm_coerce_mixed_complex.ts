import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IComplexNested {
  users: Array<{
    profile: {
      name: string;
      tags: string[];
    };
    scores: number[];
  }>;
  metadata: {
    count: number;
    labels: string[];
  };
}

export const test_llm_coerce_mixed_complex = (): void => {
  const parameters = typia.llm.parameters<IComplexNested>();
  const original: IComplexNested = {
    users: [
      {
        profile: { name: "Alice", tags: ["admin", "user"] },
        scores: [95, 87, 92],
      },
    ],
    metadata: { count: 100, labels: ["active", "verified"] },
  };

  const corrupted = {
    users: [
      JSON.stringify({
        profile: JSON.stringify({
          name: original.users[0]!.profile.name,
          tags: JSON.stringify(original.users[0]!.profile.tags),
        }),
        scores: JSON.stringify(original.users[0]!.scores),
      }),
    ],
    metadata: JSON.stringify({
      count: original.metadata.count,
      labels: JSON.stringify(original.metadata.labels),
    }),
  };

  const result = LlmJson.parse<IComplexNested>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("users[0].profile.name", result.data.users[0]!.profile.name, "Alice");
    TestValidator.equals("users[0].profile.tags", result.data.users[0]!.profile.tags, ["admin", "user"]);
    TestValidator.equals("users[0].scores", result.data.users[0]!.scores, [95, 87, 92]);
    TestValidator.equals("metadata.count", result.data.metadata.count, 100);
    TestValidator.equals("metadata.labels", result.data.metadata.labels, ["active", "verified"]);
  }
};
