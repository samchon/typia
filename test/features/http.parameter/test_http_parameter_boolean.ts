import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_boolean = () => {
    TestValidator.equals("parameter<boolean>(boolean)")(
        typia.http.parameter<boolean>("false"),
    )(false);
    TestValidator.equals("parameter<boolean>(boolean)")(
        typia.http.parameter<boolean>("1"),
    )(true);

    TestValidator.error("parameter<boolean>(null)")(() =>
        typia.http.parameter<boolean>("null"),
    );
    TestValidator.error("parameter<boolean>(string)")(() =>
        typia.http.parameter<boolean>("one"),
    );
    TestValidator.error("parameter<boolean>(number)")(() =>
        typia.http.parameter<number>("3.14"),
    );
};
