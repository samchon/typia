import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_boolean_nullable = () => {
    const decoder = typia.http.createParameter<boolean | null>();

    TestValidator.equals("parameter<boolean | null>(boolean)")(
        decoder("false"),
    )(false);
    TestValidator.equals("parameter<boolean | null>(boolean)")(decoder("1"))(
        true,
    );
    TestValidator.equals("parameter<boolean | null>(null)")(decoder("null"));

    TestValidator.error("parameter<boolean | null>(string)")(() =>
        decoder("one"),
    );
    TestValidator.error("parameter<boolean | null>(number)")(() =>
        decoder("3.14"),
    );
};
