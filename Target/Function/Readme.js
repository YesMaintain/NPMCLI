var t = async () =>
	new Set(
		[
			...(await (
				await import("fast-glob")
			).default(["**/README.md"], {
				absolute: !0,
				cwd: (await import("../Variable/Environment.js")).default.parse(
					process.env
				).Base,
			})),
		].sort()
	);
export { t as default };
