import { $ } from "bun";

await $`dd if=/dev/urandom of=bigfile.txt bs=1M count=2048`;
