var r = async (t, e = {}, o = "octokit") => {
	try {
		switch ((console.log(`Successfully ${t}`), o)) {
			case "octokit":
				return await new (await import("@octokit/core")).Octokit({
					auth: (
						await import("../Variable/Environment.js")
					).default.parse(process.env).Token,
				}).request(
					t,
					(await import("deepmerge-ts")).deepmerge(e, {
						headers: {
							"If-None-Match": (await import("etag")).default(t),
						},
					})
				);
		}
	} catch {
		return {};
	}
};
export { r as default };
