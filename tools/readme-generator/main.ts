#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run

import { readExamplesFromJsonPath, groupExamplesByTagsRecursive } from "./transform.ts";
import { generateContent, generateToc } from "./generator.ts";

async function main() {
  if (Deno.args.length < 2) {
    console.log("Usage: generate.ts README.md.tmpl examples.json");
    Deno.exit(1);
  }

  console.log("Reading examples.json...");

  const examples = await readExamplesFromJsonPath(Deno.args[1]);
  const examplesByTags = await groupExamplesByTagsRecursive(examples);

  const content = generateContent(examplesByTags);
  const toc = generateToc(examplesByTags);

  console.log("Reading README.md.tmpl...");

  const readmeTmplPath = Deno.args[0];
  const readmeTmpl = await Deno.readTextFile(readmeTmplPath);

  console.log("Generating README.md...");

  const readme = readmeTmpl
    .replace("{{toc}}", toc)
    .replace("{{content}}", content);

  console.log("Writing README.md...");

  await Deno.writeTextFile("README.md", readme);
}

await main();
