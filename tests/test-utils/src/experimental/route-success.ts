import { OpenApi } from "@typia/interface";
import { HttpMigration } from "@typia/utils";

const document: OpenApi.IDocument = {
  "x-samchon-emended-v4": true,
  components: {},
  paths: {
    "/nothing": {
      get: {
        responses: {
          "200": {
            description: "something",
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
  },
  openapi: "3.1.0",
};
const app = HttpMigration.application(document);
console.log(app.routes[0]);
