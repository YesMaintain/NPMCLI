var p = async (i = []) => {
	const n = (await import("../Variable/Environment.js")).default.parse(
			process.env
		).User,
		f = [],
		a = [];
	for (const o of (await s(`GET /users/${n}/repos`))?.data)
		a.push({ owner: n, name: o.name });
	for (const o of (await s(`GET /users/${n}/orgs`))?.data) {
		f.push({ name: o.login });
		for (const e of (await s(`GET /orgs/${o.login}/repos`))?.data)
			a.push({ owner: o.login, name: e.name });
	}
	let r;
	for (const { name: o, owner: e } of a) {
		for (const t of i) o === t ? (r = !0) : (r = !1);
		if (typeof r > "u" || r)
			for (const t of (
				await s(`GET /repos/${e}/${o}/actions/workflows`, {
					owner: e,
					repo: o,
				})
			)?.data?.workflows)
				await s(
					`POST /repos/${e}/${o}/actions/workflows/${t.id}/dispatches`,
					{ ref: "main" }
				);
	}
};
const { default: s } = await import("../Function/Request.js");
export { s as Request, p as default };
