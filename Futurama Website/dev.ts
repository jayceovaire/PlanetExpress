#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "https://deno.land/x/fresh@1.2.0/dev.ts";

await dev(import.meta.url, "./main.ts");
