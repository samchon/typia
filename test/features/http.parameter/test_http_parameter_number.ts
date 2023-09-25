import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_number = () => {
    const value: number = typia.http.parameter<number>("3.14");
    TestValidator.equals("parameter<number>(number)")(value)(3.14);

    TestValidator.error("parameter<number>(null)")(() =>
        typia.http.parameter<number>("null"),
    );
    TestValidator.error("parameter<number>(string)")(() =>
        typia.http.parameter<number>("one"),
    );
    TestValidator.error("parameter<number>(boolean)")(() =>
        typia.http.parameter<number>("false"),
    );
};
