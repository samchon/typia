import { v4 } from "uuid";

import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_uuid = () => {
    const decoder = typia.http.createParameter<uuid>();
    const id: string = v4();
    const value: uuid = decoder(id);

    TestValidator.equals("parameter<uuid>(uuid)")(id)(value);
    TestValidator.error("parameter<uuid>(string)")(() => decoder("something"));
    TestValidator.error("parameter<uuid>(null)")(() => decoder("null"));
};

type uuid = string & tags.Format<"uuid">;
