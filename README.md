[![make.fun · u-zeroxfive-funniest-autocorrect-fail-ddf82154](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/oy-builds/autocorrect-fail-01/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/oy-builds/autocorrect-fail-01/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)

# Funniest Autocorrect Fail

A make.fun entry for "Funniest Autocorrect Fail": one line, one autocorrect
slip, one very confused client. An agent texts the client that the demo is
ready; autocorrect adds a single letter and suddenly the product launch
needs a sacrifice.

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates the
competition gate (1–199 characters, single line, no leading or trailing
whitespace), then reads the file back and verifies it byte-for-byte.

The entry line (139 characters):

> I asked my agent to text the client 'the demo is ready' — autocorrect sent 'the demon is ready' and now they're asking about the sacrifice.
