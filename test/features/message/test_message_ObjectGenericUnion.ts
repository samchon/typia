import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGenericUnion = _test_message(
    "ObjectGenericUnion",
    TSON.message<ObjectGenericUnion>(),
    `syntax = \"proto3\";

message ObjectGenericUnion {
    message ISaleQuestion {
        string writer = 1;
        optional ObjectGenericUnion.ISaleAnswer answer = 2;
        string id = 3;
        double hit = 4;
        repeated ObjectGenericUnion.ISaleArticle.IContent contents = 5;
        string created_at = 6;
    }

    message ISaleAnswer {
        string id = 1;
        double hit = 2;
        repeated ObjectGenericUnion.ISaleArticle.IContent contents = 3;
        string created_at = 4;
    }

    message ISaleArticle {
        message IContent {
            string id = 1;
            string created_at = 2;
            string title = 3;
            string body = 4;
            repeated Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ files = 5;
        }
    }

    message ISaleReview {
        string writer = 1;
        optional ObjectGenericUnion.ISaleAnswer answer = 2;
        string id = 3;
        double hit = 4;
        repeated ObjectGenericUnion.ISaleReview.IContent contents = 5;
        string created_at = 6;
    
    
        message IContent {
            double score = 1;
            string id = 2;
            string created_at = 3;
            string title = 4;
            string body = 5;
            repeated Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ files = 6;
        }
    }
}

message Omit_lt_ObjectGenericUnion {
    message IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ {
        string url = 1;
        string name = 2;
        optional string extension = 3;
    }
}

message __Main {
    oneof value {
        ObjectGenericUnion.ISaleQuestion o0 = 1;
        ObjectGenericUnion.ISaleReview o1 = 2;
    }
}`,
);
