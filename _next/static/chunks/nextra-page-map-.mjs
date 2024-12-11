import meta from "../../../pages/_meta.js";
import docs_meta from "../../../pages/docs/_meta.js";
import docs_json_meta from "../../../pages/docs/json/_meta.js";
import docs_llm_meta from "../../../pages/docs/llm/_meta.js";
import docs_protobuf_meta from "../../../pages/docs/protobuf/_meta.js";
import docs_utilization_meta from "../../../pages/docs/utilization/_meta.js";
import docs_validators_meta from "../../../pages/docs/validators/_meta.js";
import playground_meta from "../../../pages/playground/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "json",
    route: "/docs/json",
    children: [{
      data: docs_json_meta
    }, {
      name: "parse",
      route: "/docs/json/parse",
      frontMatter: {
        "sidebarTitle": "Parse"
      }
    }, {
      name: "schema",
      route: "/docs/json/schema",
      frontMatter: {
        "sidebarTitle": "Schema"
      }
    }, {
      name: "stringify",
      route: "/docs/json/stringify",
      frontMatter: {
        "sidebarTitle": "Stringify"
      }
    }]
  }, {
    name: "llm",
    route: "/docs/llm",
    children: [{
      data: docs_llm_meta
    }, {
      name: "application",
      route: "/docs/llm/application",
      frontMatter: {
        "sidebarTitle": "Application"
      }
    }, {
      name: "parameters",
      route: "/docs/llm/parameters",
      frontMatter: {
        "sidebarTitle": "Parameters"
      }
    }, {
      name: "schema",
      route: "/docs/llm/schema",
      frontMatter: {
        "sidebarTitle": "Schema"
      }
    }]
  }, {
    name: "misc",
    route: "/docs/misc",
    frontMatter: {
      "sidebarTitle": "Misc"
    }
  }, {
    name: "protobuf",
    route: "/docs/protobuf",
    children: [{
      data: docs_protobuf_meta
    }, {
      name: "decode",
      route: "/docs/protobuf/decode",
      frontMatter: {
        "sidebarTitle": "Decode"
      }
    }, {
      name: "encode",
      route: "/docs/protobuf/encode",
      frontMatter: {
        "sidebarTitle": "Encode"
      }
    }, {
      name: "message",
      route: "/docs/protobuf/message",
      frontMatter: {
        "sidebarTitle": "Message"
      }
    }]
  }, {
    name: "pure",
    route: "/docs/pure",
    frontMatter: {
      "sidebarTitle": "Pure"
    }
  }, {
    name: "random",
    route: "/docs/random",
    frontMatter: {
      "sidebarTitle": "Random"
    }
  }, {
    name: "setup",
    route: "/docs/setup",
    frontMatter: {
      "sidebarTitle": "Setup"
    }
  }, {
    name: "utilization",
    route: "/docs/utilization",
    children: [{
      data: docs_utilization_meta
    }, {
      name: "hono",
      route: "/docs/utilization/hono",
      frontMatter: {
        "sidebarTitle": "Hono"
      }
    }, {
      name: "nestjs",
      route: "/docs/utilization/nestjs",
      frontMatter: {
        "sidebarTitle": "Nestjs"
      }
    }, {
      name: "prisma",
      route: "/docs/utilization/prisma",
      frontMatter: {
        "sidebarTitle": "Prisma"
      }
    }, {
      name: "trpc",
      route: "/docs/utilization/trpc",
      frontMatter: {
        "sidebarTitle": "Trpc"
      }
    }]
  }, {
    name: "validators",
    route: "/docs/validators",
    children: [{
      data: docs_validators_meta
    }, {
      name: "assert",
      route: "/docs/validators/assert",
      frontMatter: {
        "sidebarTitle": "Assert"
      }
    }, {
      name: "functional",
      route: "/docs/validators/functional",
      frontMatter: {
        "sidebarTitle": "Functional"
      }
    }, {
      name: "is",
      route: "/docs/validators/is",
      frontMatter: {
        "sidebarTitle": "Is"
      }
    }, {
      name: "tags",
      route: "/docs/validators/tags",
      frontMatter: {
        "sidebarTitle": "Tags"
      }
    }, {
      name: "validate",
      route: "/docs/validators/validate",
      frontMatter: {
        "sidebarTitle": "Validate"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "playground",
  route: "/playground",
  children: [{
    data: playground_meta
  }, {
    name: "index",
    route: "/playground",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}];