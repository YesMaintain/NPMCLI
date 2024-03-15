var o = async (e = "") => {
	if (typeof e != "string") return;
	const t = e
		?.replace("git://", "https://")
		?.replace("https://github.com/", "")
		?.replace("git+", "")
		?.replace(".git", "");
	try {
		await new (await import("@octokit/core")).Octokit({
			auth: (await import("../Variable/Environment.js")).default.parse(
				process.env
			).Token,
		}).request(`PUT /user/starred/${t}`),
			console.log(`Starred repository: ${t}`);
	} catch {
		console.log(`Could not star repository: ${t}`);
	}
};
export { o as default };
