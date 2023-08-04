/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$/std/dotenv/load.ts";

import { start } from "https://deno.land/x/fresh@1.2.0/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "https://deno.land/x/fresh@1.2.0/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
await start(manifest, { plugins: [twindPlugin(twindConfig)] });
