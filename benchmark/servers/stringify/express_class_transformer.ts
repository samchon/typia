import * as ct from "class-transformer";
import express from "express";
import "reflect-metadata";

import { CvArrayHierarchical } from "../../structures/class-validator/CvArrayHierarchical";
import { CvArrayRecursive } from "../../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArraySimple } from "../../structures/class-validator/CvArraySimple";
import { CvObjectHierarchical } from "../../structures/class-validator/CvObjectHierarchical";
import { CvObjectRecursive } from "../../structures/class-validator/CvObjectRecursive";
import { CvObjectSimple } from "../../structures/class-validator/CvObjectSimple";
import { CvObjectUnionExplicit } from "../../structures/class-validator/CvObjectUnionExplicit";
import { ServerStorage } from "../ServerStorage";

const server: express.Express = express();
const reply =
    (schema: ct.ClassConstructor<any>) =>
    <T extends object>(input: T[]) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(
                JSON.stringify(
                    input.map((elem) =>
                        ct.classToPlain(ct.plainToClass(schema, elem)),
                    ),
                ),
            );

const storage = ServerStorage();

server.get("/ObjectSimple", reply(CvObjectSimple)(storage.ObjectSimple));
server.get(
    "/ObjectHierarchical",
    reply(CvObjectHierarchical)(storage.ObjectHierarchical),
);
server.get(
    "/ObjectRecursive",
    reply(CvObjectRecursive)(storage.ObjectRecursive),
);
server.get(
    "/ObjectUnionExplicit",
    reply(CvObjectUnionExplicit)(storage.ObjectUnionExplicit),
);

server.get("/ArraySimple", reply(CvArraySimple)(storage.ArraySimple));
server.get(
    "/ArrayHierarchical",
    reply(CvArrayHierarchical)(storage.ArrayHierarchical),
);
server.get("/ArrayRecursive", reply(CvArrayRecursive)(storage.ArrayRecursive));
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(CvArrayRecursiveUnionExplicit)(storage.ArrayRecursiveUnionExplicit),
);

server.listen({ port: 33_331 });
