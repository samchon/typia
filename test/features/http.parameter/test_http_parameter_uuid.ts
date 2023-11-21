import { v4 } from "uuid";

import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_uuid = () => {
  const id: string = v4();
  const value: uuid = typia.http.parameter<uuid>(id);
  TestValidator.equals("parameter<uuid>(uuid)")(id)(value);

  TestValidator.error("parameter<uuid>(string)")(() =>
    typia.http.parameter<uuid>("something"),
  );
  TestValidator.error("parameter<uuid>(null)")(() =>
    typia.http.parameter<uuid>("null"),
  );
};

type uuid = string & tags.Format<"uuid">;
