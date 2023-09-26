import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_string = () => {
    const decoder = typia.http.createParameter<string>();
    const value: string = decoder("something");
    TestValidator.equals("parameter<string>(string)")(value)("something");
    TestValidator.error("parameter<string>(null)")(() => decoder("null"));
};
