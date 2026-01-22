import typia, { IJsonSchemaApplication } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export function test_json_application(): void {
  const app: IJsonSchemaApplication = typia.json.application<Calculator>();
  TestValidator.equals("functions")(app.functions.map((f) => f.name).sort())(
    ["plus", "minus", "power"].sort(),
  );
}

interface Calculator {
  plus(x: number, y: number): number;
  minus(x: number, y: number): number;
  power(props: { x: number; y: number }): Promise<number>;
}
