import typia from "../../../../src";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUnionComposite = _test_application(
    "swagger",
)(
    "ObjectUnionComposite",
    typia.application<[ObjectUnionComposite], "swagger">(),
);
