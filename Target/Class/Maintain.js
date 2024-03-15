#!/usr/bin/env node
const n = new (await import("commander")).Command()
	.name("Maintain")
	.description("\u{1F527} Maintain GitHub repositories.")
	.version("0.0.3");
(await import("../Variable/Command.js")).default?.forEach(
	({ Action: o, Name: e, Description: a, Arguments: i }) => {
		const r = n
			.command(e)
			.description(typeof a < "u" ? a : "")
			.action(o);
		i?.forEach(({ Name: t, Description: m }) => r.argument(t, m));
	}
);
var s = n.parse();
export { s as default };
