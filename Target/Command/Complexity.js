var t = async () => {
	for (const [o, a] of await (
		await import("../Function/Directory.js")
	).default(await (await import("../Function/Package.js")).default()))
		console.log("------ Complexity ------"), console.log(o), console.log(a);
};
export { t as default };
